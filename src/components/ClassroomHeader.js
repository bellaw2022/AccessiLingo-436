import React, { useState } from 'react';
import '../App.css'; 
import { useNavigate } from 'react-router-dom';
import SleepMode from '../components/SleepMode';
import HeartModel from '../components/HeartModel';



const ClassroomHeader = ({ setMode, className }) => {
    let navigate = useNavigate();
    const [showSleepModePopup, setShowSleepModePopup] = useState(false);

    const toggleSleepMode = () => {
        setShowSleepModePopup(!showSleepModePopup); 
    };
    return (
        <div className={className}>
            <div className="heart-container">
                <HeartModel />
        </div>
            <button className="classheader-button" onClick={() => navigate('/classroom') }>Learning</button>
            <button className="classheader-button" onClick={() => navigate('/classroompractice')}>Practice</button>
            <button className="classheader-button" onClick={toggleSleepMode}>Sleep Mode</button>
            <SleepMode showPopup={showSleepModePopup} handleClose={() => setShowSleepModePopup(false)} />
        </div>
    );
};

export default ClassroomHeader;
