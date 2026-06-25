import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import TypingIndicator from './components/TypingIndicator';
import { useChatManager } from './hooks/useChatManager';

function App() {
  const {
    chats,
    activeChat,
    activeChatId,
    isTyping,
    handleSelectChat,
    handleNewChat,
    handleSendMessage,
    handleDeleteChat
  } = useChatManager();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[radial-gradient(ellipse_at_top,_var(--bg-subtle),_var(--bg))] text-[var(--text)] overflow-hidden font-sans">
      <Sidebar 
        chats={chats} 
        onSelectChat={handleSelectChat} 
        activeChatId={activeChatId} 
        onNewChat={handleNewChat}
        onDeleteChat={handleDeleteChat}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <main className="flex-1 flex flex-col relative bg-transparent overflow-hidden">
        {!isSidebarOpen && (
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="absolute top-6 left-6 z-40 p-2.5 text-white/50 hover:text-[var(--accent)] bg-[#111] hover:bg-[#1a1a1a] backdrop-blur-md rounded-md border border-white/10 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.8),_inset_0_1px_0_rgba(255,255,255,0.05)] group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        )}
        <MessageList messages={activeChat.messages} />
        {isTyping && <TypingIndicator />}
        <div className="p-6 w-full mt-auto">
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      </main>
    </div>
  );
}

export default App;
