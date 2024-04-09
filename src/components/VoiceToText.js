import React, { useState, useEffect } from 'react';
import '../App.css'

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
    console.log("-----1");
    console.log(recognition);

    recognition.onresult = (event) => {
        console.log("------2");
      const transcriptArr = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript);
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
    <div>
    <button className="read-button" onClick={() => setIsListening((prevState) => !prevState)}>
      {isListening ? 'Stop Listening' : 'Start Listening'}
    </button>
    <p style={{ color: 'white' }}>{transcript}</p>
  </div>
  );
};

export default VoiceToText;
