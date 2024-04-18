import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
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
