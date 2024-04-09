import React from 'react';
import SideBar from '../components/SideBar';
import EngToSpan from '../components/EngToSpan';
import VoiceToText from '../components/VoiceToText';
import Header from '../components/Header';

const Classroom = () => {
  return (
    <div>
        <Header />
        <SideBar />
        <VoiceToText />
        <EngToSpan />
        <VoiceToText />
    
        <p>1. Read</p>
        <p>2. Listen and check your pronciantion</p>

    </div>
  );
};

export default Classroom;
