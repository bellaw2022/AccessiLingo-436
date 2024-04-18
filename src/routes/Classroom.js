import React from 'react';
import EngToSpan from '../components/EngToSpan';
import ClassroomHeader from '../components/ClassroomHeader';
import '../App.css'; 


const Classroom = () => {
  return (
    <div>
        <ClassroomHeader className="classroom-header" />
        <EngToSpan />
    </div>
  );
};

export default Classroom;
