import React from 'react';
import SideBar from '../components/SideBar';
import ClassroomFlashCard from '../components/ClassroomFlashCard';
import Header from '../components/Header';
import ClassroomHeader from '../components/ClassroomHeader';
import { useState } from 'react';
import '../App.css'; 


const Classroom = () => {
  const [mode, setMode] = useState('learning');  
  console.log("Current mode:", mode);
  return (
    <div>
        <Header />
        <ClassroomHeader setMode={setMode} className="classroom-header" />
        <SideBar />
        <ClassroomFlashCard />
    </div>
  );
};

export default Classroom;
