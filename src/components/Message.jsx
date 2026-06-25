import React from 'react';
import ReactMarkdown from 'react-markdown';

const Message = ({ message }) => {
  const isMe = message.sender === 'me';

  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`relative max-w-[80%] px-6 py-4 rounded-md overflow-hidden ${
          isMe
            ? 'bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#111111] text-[var(--text-h)] border border-[var(--message-me-border)] rounded-br-none shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_4px_15px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-[#1a1a1a] via-[#111111] to-[#0a0a0a] text-[var(--message-bot-text)] border border-white/10 rounded-bl-none shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_4px_15px_rgba(0,0,0,0.5)]'
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
        <div className="relative z-10 text-[15px] prose prose-invert max-w-none leading-relaxed font-sans tracking-wide">
          <ReactMarkdown>{message.text}</ReactMarkdown>
        </div>
        <span className={`relative z-10 text-[10px] opacity-70 mt-3 block tracking-[0.2em] font-medium uppercase ${isMe ? 'text-[var(--accent)] text-right' : 'text-white/40 text-left'}`}>
          {message.timestamp}
        </span>
      </div>
    </div>
  );
};

export default Message;
