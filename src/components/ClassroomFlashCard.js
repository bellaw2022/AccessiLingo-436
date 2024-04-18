import React, { useState } from 'react';
import VoiceToText from './VoiceToText'; 
import '../styles/ClassroomPrac.css'


const ClassroomFlashCard = () => {
    const [showSpanish, setShowSpanish] = useState(false); 

    const toggleSpanish = () => {
        setShowSpanish(!showSpanish);
    };

    return (
        <div>
            <div className="classroom-layout">
                <div className="prac-story">
                    <h2>English Story</h2>
                    <p id="story-text">
                        Learning a new language opens up countless opportunities for personal growth, cultural understanding, career enhancement, and global communication.
                    </p>
                </div>

                <div className="voice-to-text-and-flashcard">
                    <div className="voice-to-text-container">
                        <VoiceToText />
                    </div>
                    <div className="flashcard">
                        <button className="read-button" onClick={toggleSpanish}>
                            {showSpanish ? "Hide Answer" : "Check the Answer"}
                        </button>
                        {showSpanish && (
                            <p className="spanish-text">
                                Aprender un nuevo idioma abre innumerables oportunidades para el crecimiento personal, la comprensión cultural, la mejora profesional y la comunicación global.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassroomFlashCard;
