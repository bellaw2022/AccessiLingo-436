import React from 'react';
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate()

  const goToAIChat=()=>{
    navigate("/community/aichat");
  }

  return (
    <div className="main-community-page">
      <div className="div">
        {/* <div className="text-wrapper">Community</div> */}
        <div className="overlap">
          <div className="text-wrapper-2">Learn More</div>
          <div className="rectangle" />
          <div className="text-wrapper-3">
            <button onClick={() => goToAIChat()} className="comm-chat-btn">Go Chat!</button>
          </div>
        </div>
        <div className="dialogue-box">
          <div className="overlap-group">
            <div className="text-wrapper-4">Chat Bot</div>
            <p className="p">Practice writing conversation with our chat bot!</p>
          </div>
          <div className="div-2">
            <img className="comm-img" alt="Chatbot" src="chatbot.png" />
          </div>
        </div>
        <div className="dialogue-box-2">
          <div className="overlap-group">
            <div className="text-wrapper-4">Games</div>
            <p className="p">Practice your vocabulary with our bingo game!</p>
          </div>
          <div className="div-2">
            <img className="comm-img" alt="Bingo" src="bingo.png" />
          </div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-5">Go Talk!</div>
        </div>
        <div className="overlap-2">
          <div className="dialogue-box-3">
            <div className="overlap-group">
              <div className="text-wrapper-4">Voice Bot</div>
              <p className="p">Practice speaking conversations with our AI!</p>
            </div>
            <div className="div-2">
              <img className="comm-img" alt="Voicebot" src="voicebot.png" />
            </div>
              
          </div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-6">Go Play!</div>
        </div>
      </div>
    </div>
  );
};

export default Community;
