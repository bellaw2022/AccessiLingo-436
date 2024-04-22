import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import HeartModel from '../components/HeartModel';
import '../styles/Explore.css'; 
import SleepMode from '../components/SleepMode';



const Explore = ({ setMode, className }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate()

  const goToAIChat=()=>{
    navigate("/community/aichat");
  }

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };


  return (
    <div className="Explore-Page">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper-2">Learn More</div>
          <div className="rectangle" />
          <div className="text-wrapper-3">
            <button onClick={toggleModal} className="comm-chat-btn">Learn More</button>
          </div>
        </div>
        <div className="dialogue-box">
          <div className="overlap-group">
            <div className="text-wrapper-4">Spanish</div>
            <p className="p">1.2M Learners</p>
          </div>
          <div className="div-2">
            <img className="Language" alt="Spanish" src="Spanish.png" />
          </div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-5">
            <button onClick={toggleModal} className="comm-chat-btn">Learn More</button>
          </div>
        </div>
        {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <p>
              <div className="modal-header">
                Preview Spanish Lessons
              </div>
              <div className="Picture1">
                <img className="Animal" alt="Chicken" src="Chicken.png" />
                <div className="Pic1Text">Pollo</div>
              </div>
              <div className="Picture2">
                <img className="Animal" alt="Dog" src="Dog.png" />
                <div className="Pic2Text">Perro</div>
              </div>
              <div className="AudioText">
                Click me For Audio
              </div>
            </p>
          </div>
        </div>
        )}
        <div className="overlap-2">
          <div className="dialogue-box-3">
            <div className="overlap-group">
              <div className="text-wrapper-4">French</div>
              <p className="p">859,000 Learners</p>
            </div>
            <div className="div-2">
              <img className="Language" alt="French" src="French.png" />
            </div>
          </div>
        </div>
        <div className="dialogue-box-2">
          <div className="overlap-group">
            <div className="text-wrapper-4">Italian</div>
            <p className="p">567,000 Learners</p>
          </div>
          <div className="div-2">
            <img className="Language" alt="Italian" src="Italian.png" />
          </div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-5">
            <button onClick={toggleModal} className="comm-chat-btn">Learn More</button>
          </div>
        </div>
        <div className="search-button">
            <div className="text-wrapper-7">Search</div>
        </div>
        <div className="language-courses-tab">
            <div className="text-wrapper-8">Language Courses For English Speakers</div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
