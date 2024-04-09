import React from 'react';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import HeartModel from '../components/HeartModel';
import '../App.css'; 

const Explore = () => {
  return (
    <div className="explore-container">
        <Header />
        <SideBar />
        <div className="main-content">
            <div className="class-container left-classes">
                <img src="./class.jpg" alt="Class 1" className="class-preview"/>
                <p>class 1</p>
                <img src="./class.jpg" alt="Class 2" className="class-preview"/>
                <p>class 2</p>
                <img src="./class.jpg" alt="Class 3" className="class-preview"/>
                <p>class 3</p>
            </div>
            <div className="heart-container">
                <HeartModel />
            </div>
            <div className="class-container right-classes">
                <img src="./class.jpg" alt="Class 4" className="class-preview"/>
                <p>class 4</p>
                <img src="./class.jpg" alt="Class 5" className="class-preview"/>
                <p>class 5</p>
                <img src="./class.jpg" alt="Class 6" className="class-preview"/>
                <p>class 6</p>
            </div>
        </div>
        <div className="explore-footer">
            <p>1. diff className</p>
            <p>2. can have voice assist to read out the class and intro</p>
            <p>3. can have AI assistance to give suggestion for choosing class</p>
        </div>
    </div>
  );
};

export default Explore;
