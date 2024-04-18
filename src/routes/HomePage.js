import React from 'react';
import { Link } from 'react-router-dom';
import "./../styles/HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className='home-bg'></div>
      <div className='home-page'>
        <p className='home-page__title'>We make learning <br></br> languages easy</p>
        <p className='home-page__description'>Start your journey to fluency with our intuitive, <br></br> effective, and accessible language learning <br></br> platform with a vast community and speech <br></br> assistants integrated with AI.</p>

        <button className='home-page__CTA'>
          <Link to="/login">Get Started</Link>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100">
            <path d="M 25 50 H 80 Z M 60 30 L 80 50 L 60 70" fill="transparent" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default HomePage;
