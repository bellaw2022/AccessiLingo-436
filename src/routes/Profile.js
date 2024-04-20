import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import "./../styles/Profile.css";


const Profile = () => {

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="profile-container">
            <ProfileHeader page="profile" />
            <section className='profile'>
                <h2>Profile</h2>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className='profile__details'>
                            <label htmlFor="username">Username</label>
                            <input type="text"
                                name="username" 
                                id="username"
                                placeholder='Username'
                                required 
                                autoComplete="off"
                                defaultValue="Shnitzel"
                            />

                            <label htmlFor="email">Email</label>
                            <input type="text"
                                name="email" 
                                id="email"
                                placeholder='Email'
                                required 
                                autoComplete="off"
                                defaultValue="Shnitzel.chowder@gmail.com"
                            />
                        </div>
                        <div className="profile__picture">
                            <p className='section-title'>Profile <br/> Picture</p>
                            <img src="profile.png" alt="Profile" width={938} height={894}/>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100">
                                    <path d="M 40 85 L 50 98 L 60 85 V 10 H 40 V 80 Z M 40 25 H 60" fill="transparent" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" 
                                        transform="rotate(40) scale(1.25, 1.25)" transform-origin="50 50"/>
                                </svg>
                               <span> Edit</span>
                            </button>
                        </div>
                    </div>
                    <label htmlFor="bio">Bio</label>
                    <textarea 
                        name="bio" 
                        id="bio" 
                        cols="30"
                        rows="10"
                        placeholder="Type your bio here" 
                        required 
                        autoComplete="off"
                        defaultValue="Radda radda...">	
                    </textarea>
                    <button className='save-button'>Save</button>
                </form>
            </section>
        </div>
  	)
}

export default Profile;