import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import "./../styles/Profile.css";


const ProfileAccessibility = () => {
    return (
        <div className="profile-container">
            <ProfileHeader page="accessibility"/>
            <section className="accessbility">
                <h2>Accessibility</h2>
                <hr></hr>
                <form>
                    <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                    </div>
                    <div>
                        <input type="radio" />
                    </div>
                    <div>
                        <input type="radio" />
                        <input type="radio" />
                    </div>
                    <button className='save-button'>Save</button>
                </form>
            </section>
        </div>
    )
}

export default ProfileAccessibility;