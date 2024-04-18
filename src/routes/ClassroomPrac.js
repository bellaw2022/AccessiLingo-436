import React from 'react';
import ClassroomFlashCard from '../components/ClassroomFlashCard';
import ClassroomHeader from '../components/ClassroomHeader';
import { useState } from 'react';
import '../App.css'; 


const Classroom = () => {
  const [mode, setMode] = useState('learning');  
  console.log("Current mode:", mode);
  return (
    <div>
        <ClassroomHeader setMode={setMode} className="classroom-header" />
        <ClassroomFlashCard />
    </div>
  );
};

export default Classroom;
