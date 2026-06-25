import { useState, useEffect } from 'react';
import { streamChatCompletion } from '../services/api';

/**
 * @typedef {import('../types').Chat} Chat
 * @typedef {import('../types').Message} Message
 */

export function useChatManager() {
  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem('chat_history');
    return savedChats ? JSON.parse(savedChats) : [
      {
        id: 1,
        title: 'New Chat',
        messages: [
          { text: 'Hello! How can I help you today?', sender: 'bot', timestamp: '10:00 AM' },
          { text: 'I need help with my project.', sender: 'me', timestamp: '10:01 AM' },
        ],
      },
      {
        id: 2,
        title: 'Previous Chat 1',
        messages: [
          { text: 'How do I use Tailwind?', sender: 'me', timestamp: '09:00 AM' },
          { text: 'You can use it via the Vite plugin!', sender: 'bot', timestamp: '09:01 AM' },
        ],
      },
      {
        id: 3,
        title: 'Previous Chat 2',
        messages: [],
      },
    ];
  });

  const [activeChatId, setActiveChatId] = useState(() => {
    const savedId = localStorage.getItem('active_chat_id');
    return savedId ? parseInt(savedId) : 1;
  });

  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem('chat_history', JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    localStorage.setItem('active_chat_id', activeChatId.toString());
  }, [activeChatId]);

  const activeChat = chats.find((chat) => chat.id === activeChatId) || chats[0];

  const handleSelectChat = (id) => {
    setActiveChatId(id);
  };

  const handleNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: 'New Chat',
      messages: [],
    };
    setChats((prev) => [...prev, newChat]);
    setActiveChatId(newChat.id);
  };

  const handleSendMessage = async (text) => {
    const newMessage = {
      text,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    let currentMessages = activeChat.messages || [];
    currentMessages = [...currentMessages, newMessage];

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId
          ? { ...chat, messages: currentMessages }
          : chat
      )
    );

    setIsTyping(true);

    try {
      let isFirstChunk = true;
      let fullBotResponse = '';
      const botMessageId = Date.now();

      for await (const chunk of streamChatCompletion(currentMessages)) {
        if (isFirstChunk) {
          setIsTyping(false);
          const initialBotMessage = {
            id: botMessageId,
            text: '',
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          };
          setChats((prev) =>
            prev.map((chat) =>
              chat.id === activeChatId
                ? { ...chat, messages: [...chat.messages, initialBotMessage] }
                : chat
            )
          );
          isFirstChunk = false;
        }

        fullBotResponse += chunk;
        setChats((prev) =>
          prev.map((chat) =>
            chat.id === activeChatId
              ? {
                  ...chat,
                  messages: chat.messages.map((msg) =>
                    msg.id === botMessageId ? { ...msg, text: fullBotResponse } : msg
                  ),
                }
              : chat
          )
        );
      }

      if (isFirstChunk) {
        setIsTyping(false);
      }
    } catch (error) {
      console.error('Error connecting to API:', error);
      setIsTyping(false);
      const errorMessage = {
        text: "Sorry, I couldn't connect to the server.",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === activeChatId
            ? { ...chat, messages: [...chat.messages, errorMessage] }
            : chat
        )
      );
    }
  };

  const handleDeleteChat = (chatId) => {
    if (chats.length === 1) return;
    
    const newChats = chats.filter(chat => chat.id !== chatId);
    setChats(newChats);
    if (activeChatId === chatId) {
      setActiveChatId(newChats[0].id);
    }
  };

  return {
    chats,
    activeChat,
    activeChatId,
    isTyping,
    handleSelectChat,
    handleNewChat,
    handleSendMessage,
    handleDeleteChat
  };
}
