import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex w-full">
        <div className="flex-1 bg-gradient-to-b from-[#151515] to-[#050505] border border-white/10 rounded-md focus-within:border-[var(--accent-border)] focus-within:shadow-[inset_0_2px_5px_rgba(0,0,0,0.8),_0_0_15px_var(--accent-glow)] shadow-[inset_0_2px_5px_rgba(0,0,0,0.8),_inset_0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-500 relative flex items-stretch overflow-hidden group h-[54px]">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-5 h-full bg-transparent text-[var(--text-h)] font-sans text-sm tracking-wide focus:outline-none placeholder:text-white/30 relative z-10 w-full"
          />
          <button
            type="submit"
            className="relative bg-[#FFD700]/5 backdrop-blur-md border-l border-[#FFD700]/20 hover:bg-[#FFD700]/10 hover:border-[#FFD700]/40 text-[#FFEAA7]/90 hover:text-[#FFEAA7] px-10 h-full font-bold tracking-[0.2em] text-[11px] uppercase transition-all duration-300 shadow-[inset_1px_0_0_rgba(255,215,0,0.1),_0_0_10px_rgba(255,215,0,0.05)] hover:shadow-[inset_1px_0_0_rgba(255,215,0,0.2),_0_0_15px_rgba(255,215,0,0.1)] flex items-center justify-center shrink-0 overflow-hidden z-10 rounded-r-md group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFEAA7]/10 to-transparent opacity-50 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>
            <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Send</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
