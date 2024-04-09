import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import '../App.css'; 

const Community = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState(["Hey! Let's talk!"]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="community-container">
        <Header />
        <SideBar />
        <div className="community-content">
            <button onClick={toggleChat} className="ai-chat-button">Open AI Chat</button>
            {isChatOpen && (
                <div className="ai-chat-box">
                    {chatMessages.map((message, index) => (
                        <p key={index}>{message}</p>
                    ))}
                </div>
            )}
            <p>1. Community: add friend??</p>
            <p>2. Match language practice partner</p>
            <p>3. AI chat practice bot</p>
            <p>4. emergency call - prio - prevent from driving using</p>
            <p>5. sleeping situation - apple health</p>
        </div>
    </div>
  );
};

export default Community;
