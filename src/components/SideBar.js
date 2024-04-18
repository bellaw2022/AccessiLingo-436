import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to="/profile">
        <div className="profile-picture-container">
          <img src="profile.png" alt="Profile" className="profile-picture" width={120}/>
        </div>
      </Link>

      <nav>
        <ul>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/classroom">Classroom</Link></li>
          <li><Link to="/community">Community</Link></li>
        </ul>
      </nav>

      <div className="logout">
        <li><Link to="/home">LogOut</Link></li>
      </div>
    </div>
  );
};

export default SideBar;
