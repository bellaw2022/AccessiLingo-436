import React from 'react';
import SideBar from '../components/SideBar';
import EngToSpan from '../components/EngToSpan';
import Header from '../components/Header';
import ClassroomHeader from '../components/ClassroomHeader';
import '../App.css'; 


const Classroom = () => {
  return (
    <div>
        <Header />
        <ClassroomHeader className="classroom-header" />
        <SideBar />
        <EngToSpan />
    </div>
  );
};

export default Classroom;
