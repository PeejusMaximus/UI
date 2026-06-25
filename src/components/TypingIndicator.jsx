import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-gray-200 text-black px-4 py-2 rounded-lg rounded-bl-none">
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
