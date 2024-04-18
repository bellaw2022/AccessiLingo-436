import React, { useState, useEffect } from 'react';
import '../styles/ClassroomPrac.css';  

const VoiceToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      console.log('Voice recognition activated. Start speaking...');
    };

    recognition.onresult = (event) => {
      const transcriptArr = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript);
      setTranscript(transcriptArr.join(' '));
    };

    recognition.onend = () => {
      console.log('Voice recognition stopped.');
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }
    return () => recognition.stop();
  }, [isListening]);

  return (
    <div className="flashcard">
      <button className="prac-button" onClick={() => setIsListening(prevState => !prevState)}>
        {isListening ? 'Stop and Compare' : 'Start Speaking'}
      </button>
      <div>{transcript}</div>
    </div>
    
  );
};

export default VoiceToText;