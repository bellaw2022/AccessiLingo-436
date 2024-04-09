import React from 'react';
import SideBar from '../components/SideBar';
import Header from '../components/Header';


const Profile = () => {
  return (
    <div className="profile-content">
          <Header />
          <SideBar />
          <p>1. profile</p>
          <p>2. story</p>
          <p>3. we can use a picture or something here</p>
    </div>
  );
};

export default Profile;
