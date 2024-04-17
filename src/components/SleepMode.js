import React, { useState } from 'react';
import '../styles/SleepMode.css'

const SleepMode = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);  
    setShowPopup(!isEnabled);  
  };

  const handleConfirm = () => {
    setShowPopup(false);
    setTimeout(() => {
      setShowCanvas(true);
      setTimeout(() => {
        setShowCanvas(false); 
      }, 10000); //close in 10 seconds for demo
    }, 3000); //3 sec will show prompt
  };

  const handleCancel = () => {
    setShowPopup(false);
    setIsEnabled(false);  
  };

  const handleStopSleepMode = () => {
    setShowCanvas(false);
    setIsEnabled(false);  
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isEnabled} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      {showPopup && (
        <div className="popup">
          <p>Need to access your health app to detect sleep.</p>
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
      {showCanvas && (
        <div className="popup">
          <p>Sleep detect, class audio will stop in 5 mins. To stop sleep mode, click "Stop".</p>
          <button onClick={handleStopSleepMode}>Stop</button>
        </div>
      )}
    </div>
  );
};

export default SleepMode;
