import React, {useState} from 'react';
import '../App.css';

const EngToSpan = () => {
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

        if (elementId === 'story-text2') {
            speech.lang = 'es-ES'; // Spanish
        } else {
            speech.lang = 'en-US'; // English
        }

        speech.onend = () => {
            setReading(false);
        };

        window.speechSynthesis.speak(speech);
        setCurrentReader(elementId);
        setReading(true);
    };

    return (
        <div>
            <div className="EngToSpan-container">
                <div className="read-content">
                    <div className="story">
                        <h2>English Story</h2>
                        <p id="story-text">
                            Learning a new language opens up countless opportunities for personal growth, cultural understanding, career enhancement, and global communication.
                        </p>
                        <button className="read-button" onClick={() => readText('story-text')}>
                            {reading && currentReader === 'story-text' ? 'Stop' : 'Read'}
                        </button>
                    </div>
                    <div className="story">
                        <h2>Spanish Story</h2>
                        <p id="story-text2">
                            Aprender un nuevo idioma abre innumerables oportunidades para el crecimiento personal, la comprensión cultural, la mejora profesional y la comunicación global.
                        </p>
                        <button className="read-button" onClick={() => readText('story-text2')}>
                            {reading && currentReader === 'story-text2' ? 'Stop' : 'Read'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngToSpan;
