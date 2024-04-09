import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Header from '../components/Header';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <p>
        login page
      </p>
      <button>
        <Link to="/explore">Login</Link>
      </button>
    </div>
  );
};

export default LoginPage;
