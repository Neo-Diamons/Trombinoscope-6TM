// Chat.js
import React, { useState, useRef, useEffect } from 'react';
import './Chat.css'; // Import your stylesheet

const Chat = ({ messages }) => {
  const chatContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const scrollTop = chatContainerRef.current.scrollTop;
      setScrollPosition(scrollTop);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <div className="chat-container" ref={chatContainerRef} onScroll={handleScroll}>
      {/* Render your chat messages here */}
      {messages.map((message, index) => (
        <div key={index} className="message">
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default Chat;
