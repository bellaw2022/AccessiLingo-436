import React, { useState } from 'react';
import '../styles/Preview.css'

const Preview = () => {
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

  const handleStopPreview = () => {
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
          <p>To activate Sleeping Mode, we require access to your health app to monitor your sleep patterns.</p>
          <img src="/healthapp.jpeg" alt="Health App Access Required" style={{ margin: '20px 0' }} />
          <div className="button-container">
            <button onClick={handleConfirm} className="read-button">Yes</button>
            <button onClick={handleCancel} className="read-button">Cancel</button>
        </div>
        </div>
      )}
      {showCanvas && (
        <div className="popup">
          <p>Sleep detected: the class audio will automatically cease in 5 minutes.</p>
          <p>If you wish to terminate Sleeping Mode earlier, please click "Stop".</p>
          <img src="/class.jpg" alt="preview" style={{ margin: '10px 0' }} />
          <button onClick={handleStopPreview} className="read-button">Stop</button>
        </div>
      )}
    </div>
  );
};

export default Preview;