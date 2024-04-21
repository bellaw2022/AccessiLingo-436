import React, { useState, useEffect } from 'react';

const AIChat = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([{sender: "Maria", message: "Hola! Me llamo Maria. Como se llama?"}]);
  const conversationMessages = [{sender: "Maria", message: "Hola Kiara! ¿Cómo estás?"}, {sender: "Maria", message: "Estoy bien también, gracias. ¿Qué has hecho hoy?"}, {sender: "Maria", message: "Yo he ido al gimnasio y después he cocinado la cena."}];

  const [myMessage, setMyMessage] = useState('');

  const handleMessageChange = (event) => {
    setMyMessage(event.target.value);
  };
  

  const handleSendMessage = () => {
    console.log(chatMessages)
    console.log(myMessage)
    if (myMessage.trim() !== '') {
      setChatMessages([
        ...chatMessages,
        { sender: "User", message: myMessage }, // Assuming user sends the message
        conversationMessages[Math.floor(chatMessages.length/2)]
      ]);
      console.log(chatMessages)
      setMyMessage('');

    }

  };


  return (
    <div className="aichat-container">
        <h1>AI Chat Box</h1>
        <div className="aichat-content">
            {chatMessages.map((message, index) => (
                <div key={index} className={index % 2 === 0 ? "ai-chat-box-ai" : "ai-chat-box-me"}>
                  <p >{message.message}</p>
                </div>    
            ))}
            <div className="chat-input-container">
                <input className="chat-input"
                    type="text"
                    value={myMessage}
                    onChange={handleMessageChange}
                    placeholder="Type your message..."
                />
                <button className="send-button" onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    </div>
  );
};

export default AIChat;