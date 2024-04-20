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
                    <div>
                        <div>
                            <p>Light</p>
                            {/* <svg></svg> */}
                        </div>
                        <div>
                            <p>Light High Contrast</p>
                            {/* <svg></svg> */}
                        </div>
                        <div>
                            <p>Dark</p>
                            {/* <svg></svg> */}
                        </div>
                        <div>
                            <p>Dark High Contrast</p>
                            {/* <svg></svg> */}
                        </div>
                        <div>
                            <p>Custom</p>
                            {/* <svg></svg> */}
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Font Size</h3>
                    <p>Medium</p>
                    {/* <svg></svg> */}
                </div>
                <button className='save-button'>Save</button>
            </section>
        </div>
    )
}

export default ProfileAppearance;
  