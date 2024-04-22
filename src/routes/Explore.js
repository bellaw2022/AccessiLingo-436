import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/Explore.css'; 



const Explore = ({ setMode, className }) => {
  const [openModal, setOpenModal] = useState(null);
  const navigate = useNavigate()

  const openModalHandler = (modalId) => {
    setOpenModal(modalId);
  };

  const closeModalHandler = () => {
    setOpenModal(null);
  };

  const [reading, setReading] = useState(false);
    const [currentReader, setCurrentReader] = useState(null);

    const readText = (elementId) => {
        if (reading && currentReader) {
            window.speechSynthesis.cancel(); 
            setReading(false);
            return;
        }

        const storyText = document.getElementById(elementId).textContent;
        const speech = new SpeechSynthesisUtterance(storyText);
        speech.volume = 1;
        speech.rate = 0.9;
        speech.pitch = 1.2;

        if (elementId === 'spanish1' || elementId === 'spanish2') {
          speech.lang = 'es-ES'; // Spanish
        } else if (elementId === 'french1' || elementId === 'french2') {
            speech.lang = 'fr-FR'; // French
        } else if (elementId === 'italian1' || elementId === 'italian2') {
            speech.lang = 'it-IT'; // Italian
        }

        speech.onend = () => {
            setReading(false);
        };

        window.speechSynthesis.speak(speech);
        setCurrentReader(elementId);
        setReading(true);
    };

  return (
    <div className="Explore-Page">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper-2">Learn More</div>
          <div className="rectangle" />
          <div className="text-wrapper-3">
            <button onClick={() => openModalHandler('spanish')} className="comm-chat-btn">Learn More</button>
          </div>
        </div>
        {openModal === 'spanish' && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModalHandler}>&times;</span>
            <p>
              <div className="modal-header">
                Preview Spanish Lessons
              </div>
              <div className="Picture1">
                <img className="Animal" alt="Chicken" src="Chicken.png" />
                <div className="Pic1Text"><p id="spanish1">Pollo</p></div>
              </div>
              <div className="Picture2">
                <img className="Animal" alt="Dog" src="Dog.png" />
                <div className="Pic2Text"><p id="spanish2">Perro</p></div>
              </div>
              <button className="AudioText" onClick={() => readText('spanish1')}>
                            {reading && currentReader === 'spanish1' ? 'Stop' : 'Read'}
              </button>
              <button className="AudioText2" onClick={() => readText('spanish2')}>
                            {reading && currentReader === 'spanish2' ? 'Stop' : 'Read'}
              </button>
            </p>
          </div>
        </div>
        )}
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
            <button onClick={() => openModalHandler('french')} className="comm-chat-btn">Learn More</button>
          </div>
        </div>
        {openModal === 'french' && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModalHandler}>&times;</span>
            <p>
              <div className="modal-header">
                Preview French Lessons
              </div>
              <div className="Picture1">
              <img className="Animal" alt="Chicken" src="Chicken.png" />
                <div className="Pic1Text"><p id="french1">Poulet</p></div>
              </div>
              <div className="Picture2">
                <img className="Animal" alt="Dog" src="Dog.png" />
                <div className="Pic2Text"><p id="french2">Chien</p></div>
              </div>
              <button className="AudioText" onClick={() => readText('french1')}>
                            {reading && currentReader === 'french1' ? 'Stop' : 'Read'}
              </button>
              <button className="AudioText2" onClick={() => readText('french2')}>
                            {reading && currentReader === 'french2' ? 'Stop' : 'Read'}
              </button>
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
            <button onClick={() => openModalHandler('italian')} className="comm-chat-btn">Learn More</button>
          </div>
        </div>
        {openModal === 'italian' && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModalHandler}>&times;</span>
            <p>
              <div className="modal-header">
                Preview Italian Lessons
              </div>
              <div className="Picture1">
                <img className="Animal" alt="Chicken" src="Chicken.png" />
                <div className="Pic1Text"><p id="italian1">Pollo</p></div>
              </div>
              <div className="Picture2">
                <img className="Animal" alt="Dog" src="Dog.png" />
                <div className="Pic2Text"><p id="italian2">Cane</p></div>
              </div>
              <button className="AudioText" onClick={() => readText('italian1')}>
                            {reading && currentReader === 'italian1' ? 'Stop' : 'Read'}
              </button>
              <button className="AudioText2" onClick={() => readText('italian2')}>
                            {reading && currentReader === 'italian2' ? 'Stop' : 'Read'}
              </button>
            </p>
          </div>
        </div>
        )}
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
