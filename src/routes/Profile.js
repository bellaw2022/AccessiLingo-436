import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import "./../styles/Profile.css";


const Profile = () => {
  	return (
		<div className="profile-container">
			<ProfileHeader page="profile" />
			<section className='profile'>
				<h2>Profile</h2>
				<hr></hr>
				<form>
					<div>
						<div className='profile__details'>
							<label for="username">Username</label>
							<input type="text"
								name="username" 
								id="username"
								placeholder='Username'
								required 
								autocomplete="off"
							/>

							<label for="email">Email</label>
							<input type="text"
								name="email" 
								id="email"
								placeholder='Email'
								required 
								autocomplete="off"
							/>
						</div>
						<div className="profile__picture">
							<p>Profile Picture</p>
							<img src="profile.png" alt="Profile Picture" width={938} height={894}/>
							<button>Edit</button>
						</div>
					</div>
					<label for="bio">Bio</label>
            		<textarea 
						name="bio" 
						id="bio" 
						cols="30"
						rows="10"
						placeholder="Type your bio here" 
						required 
						autocomplete="off">	
					</textarea>
					<button className='save-button'>Save</button>
				</form>
			</section>
		</div>
  	)
}

export default Profile;