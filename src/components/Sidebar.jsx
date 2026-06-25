import React from 'react';

const Sidebar = ({ chats, onSelectChat, activeChatId, onNewChat, onDeleteChat, isOpen, setIsOpen }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-br from-black/80 via-[#050505]/90 to-black/80 backdrop-blur-3xl text-[var(--sidebar-text)] flex flex-col h-full transform transition-all duration-300 ease-in-out border-r border-white/5 shadow-[20px_0_50px_rgba(0,0,0,0.5),_inset_-1px_0_0_rgba(255,215,0,0.05)] ${isOpen ? 'translate-x-0 md:ml-0' : '-translate-x-full md:-ml-72'} md:relative`}>
      <div className="flex flex-col p-6 border-b border-black/50 shadow-[0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden">
        {/* Subtle decorative grille pattern in header background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(transparent_49%,_var(--accent)_50%,_transparent_51%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay"></div>
        
        <div className="flex items-center justify-between relative z-10">
          <div className="flex flex-col">
            <span className="text-[9px] text-[var(--accent)]/60 font-mono tracking-[0.3em] uppercase mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_5px_var(--accent)] animate-pulse"></span>
              SYS.ACTIVE
            </span>
            <span className="font-bold text-4xl tracking-[0.35em] italic bg-gradient-to-br from-[#FFEAA7] via-[#FFD700] to-[#8A6B0A] bg-clip-text text-transparent uppercase drop-shadow-[0_2px_15px_rgba(255,215,0,0.4)] block leading-none">
              Supe
            </span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 hover:text-[var(--accent)] transition-colors relative z-10 text-white/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-1 px-3 custom-scrollbar">
        <div className="px-3 mb-2 flex items-center justify-between">
          <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Conversations</span>
          <div className="h-[1px] flex-1 ml-4 bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>
        {chats.map((chat, index) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`group relative px-3 py-2 cursor-pointer transition-all duration-300 rounded-md border border-transparent ${
              activeChatId === chat.id 
                ? 'bg-gradient-to-r from-black via-[#111111] to-black border-y-white/5 border-l-[var(--accent)] border-l-2 shadow-[inset_0_0_15px_rgba(255,215,0,0.02),_0_2px_10px_rgba(0,0,0,0.5)]' 
                : 'hover:bg-white/5 hover:border-white/5 text-[var(--sidebar-text)]'
            }`}
          >
            <div className={`flex justify-between items-center ${activeChatId === chat.id ? 'text-[var(--text-h)]' : 'text-white/50'}`}>
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="text-[8px] font-mono opacity-40 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  [{String(index + 1).padStart(3, '0')}]
                </span>
                <span className={`w-1 h-1 rounded-full shrink-0 ${activeChatId === chat.id ? 'bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]' : 'bg-white/10'}`}></span>
                <span className="truncate tracking-[0.1em] text-[10px] uppercase font-medium">{chat.title}</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteChat(chat.id);
                }}
                className="opacity-0 group-hover:opacity-100 p-1.5 hover:text-red-400 hover:bg-black/50 rounded transition-all shrink-0 ml-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-white/5 bg-black/40 relative overflow-hidden">
        {/* Decorative footer diagonal stripes */}
        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,white_2px,white_4px)] pointer-events-none mix-blend-overlay"></div>
        <button 
          onClick={onNewChat}
          className="w-full relative relative z-10 bg-gradient-to-b from-[#2a2a2a] via-[#111111] to-[#050505] border border-white/10 hover:border-[#FFD700]/50 text-[var(--accent)] hover:text-[#FFF] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.8)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_0_0_20px_rgba(255,215,0,0.15)] h-[54px] rounded-sm text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden flex items-center justify-center gap-3 group"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span className="w-1.5 h-1.5 rounded-sm bg-white/20 group-hover:bg-[var(--accent)] transition-colors"></span>
          <span className="relative z-10">New Chat</span>
          <span className="w-1.5 h-1.5 rounded-sm bg-white/20 group-hover:bg-[var(--accent)] transition-colors"></span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
