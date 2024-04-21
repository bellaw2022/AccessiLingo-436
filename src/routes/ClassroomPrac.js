import React from 'react';
import ClassroomFlashCard from '../components/ClassroomFlashCard';
import ClassroomHeader from '../components/ClassroomHeader';
import { useState } from 'react';
import VoiceToText from '../components/VoiceToText';
 import '../styles/ClassroomPrac.css'


const ClassroomPrac = () => {
  const [mode, setMode] = useState('learning');  
  console.log("Current mode:", mode);
  return (
    <div>
        <ClassroomHeader className="classroom-header" />
        <div className="classroom-layout">
          <div className="prac-story">
              <h2>Translate to Spanish</h2>
              <p>
                  Learning a new language opens up countless opportunities for personal growth, cultural understanding, career enhancement, and global communication.
              </p>
              {/* <p>
              What time is it?              
              </p>
              <p>
              It's two o'clock
              </p> */}
          </div>
          <div className="voice-to-text-and-flashcard">
              <VoiceToText />
              <ClassroomFlashCard />
          </div>

      </div>

    </div>
  );
};

export default ClassroomPrac;
