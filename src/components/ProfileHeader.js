import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileHeader = ({page}) => {
    const navigate = useNavigate();
  
    return (
        <div className='profile__header'>
            <h1>Settings</h1>
            <div>
                <button className={page === "profile" ? "active" : ""} onClick={() => navigate("/profile")}>Profile</button>
                <button className={page === "appearance" ? "active" : ""} onClick={() => navigate("/profileappearance")}>Appearance</button>
                <button className={page === "accessibility" ? "active" : ""} onClick={() => navigate("/profileaccessibility")}>Accessibility</button>
            </div>
        </div>
    )
}
  
export default ProfileHeader;