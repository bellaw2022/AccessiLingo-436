import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import "./../styles/Profile.css";


const ProfileAppearance = () => {
    return (
        <div className="profile-container">
            <ProfileHeader page="appearance"/>
            <section className="appearance">
                <h2>Appearance</h2>
                <hr></hr>
                <div>
                    <h3>Theme</h3>
                    <p>Custom</p>
                    <div className="themes-container">
                        <div>
                            <p>Light</p>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="white" stroke="var(--text-color)"/>
                            </svg>
                        </div>
                        <div>
                            <p>Light High<br/>Contrast</p>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100">
                                <defs>
                                    <clipPath id="ClipCircle">
                                        <circle cx="50" cy="50" r="39.6"/>
                                    </clipPath>
                                </defs>
                                <circle cx="50" cy="50" r="40" fill="white" stroke="var(--text-color)"/>
                                <rect x="0" y="50" width="50" height="50" clipPath="url(#ClipCircle)" fill="#8B92A3"/>
                                <rect x="50" y="50" width="50" height="50" clipPath="url(#ClipCircle)" fill="#32373E"/>
                            </svg>
                        </div>
                        <div>
                            <p>Dark</p>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="#1B1B1C" stroke="var(--text-color)"/>
                            </svg>
                        </div>
                        <div>
                            <p>Dark High<br/>Contrast</p>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="#1B1B1C" stroke="var(--text-color)"/>
                                <rect x="0" y="50" width="50" height="50" clipPath="url(#ClipCircle)" fill="#BCC2D1"/>
                                <rect x="50" y="50" width="50" height="50" clipPath="url(#ClipCircle)" fill="#E9EEF7"/>
                            </svg>
                        </div>
                        <div className="custom-theme">
                            <p>Custom</p>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="#B2D4E6" stroke="var(--text-color)"/>
                                <rect x="0" y="50" width="50" height="50" clipPath="url(#ClipCircle)" fill="#A8B2B8"/>
                                <rect x="50" y="50" width="50" height="50" clipPath="url(#ClipCircle)" fill="#222222"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="appearance__font-size">
                    <h3>Font Size</h3>
                    <p>Medium</p>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 375 100">
                        <defs>
                        <filter id="drop-shadow" primitiveUnits="objectBoundingBox">
                            <feDropShadow in="SourceGraphic" stdDeviation="0.05" dx="0" dy="0.025" flood-color="#555"/>
                        </filter>
                        </defs>
                        <g fill="var(--text-color)">
                            <text x="0" y="55">A</text>
                            <text x="340" y="60" fontSize="2rem">A</text>
                        </g>
                        <g strokeWidth="2">
                            <path d="M 25 50 H 175" stroke="white" />
                            <path d="M 175 50 H 325" stroke="#555" />
                            <path id="tick-white" d="M 25 42 V 58" stroke="white"/>
                            <use href="#tick-white" x="50"/>
                            <use href="#tick-white" x="100"/>
                            <use href="#tick-white" x="150"/>
                            <path id="tick-black" d="M 225 42 V 58" stroke="#555"/>
                            <use href="#tick-black" x="50"/>
                            <use href="#tick-black" x="100"/>
                        </g>
                        <circle cx="175" cy="50" r="10" fill="white" filter="url(#drop-shadow)" style={{cursor: "pointer"}}/>
                    </svg>
                </div>
                <button className='save-button'>Save</button>
            </section>
        </div>
    )
}

export default ProfileAppearance;
  