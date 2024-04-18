import React, { useState } from 'react';
import '../styles/ClassroomPrac.css'


const ClassroomFlashCard = () => {
    const [showSpanish, setShowSpanish] = useState(false); 

    const toggleSpanish = () => {
        setShowSpanish(!showSpanish);
    };

    return (
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
    );
};

export default ClassroomFlashCard;
