import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./../styles/LoginPage.css";


const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    if(formData.username.length !== 0 && formData.password.length !== 0) {
      navigate("/explore");
    }
  }

  return (
    <div className="login-container">
      <div className='login'>
        <h2 className="login__header">Login</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="login__form-label">Email or Username</label>
            <input type="text"
                id="username"
                name="username"
                className="login__form-input"
                placeholder="Email or Username"
                required
                autoComplete="off"
                value={formData.username}
                onChange={handleInputChange}
                autoFocus
            />
            <button><i className="fa-solid fa-microphone"></i></button>
          </div>
          <div>
            <label htmlFor="password" className="login__form-label">Password: </label>
            <input
                type="password"
                id="password"
                name="password"
                className="login__form-input"
                placeholder="Password"
                required
                autoComplete="off"
                value={formData.password}
                onChange={handleInputChange}
            />
            <button><i className="fa-solid fa-microphone"></i></button>
          </div>
          <div className="login__form-extras">
            <div>
              <label htmlFor="remember">Remember Me</label>
              <input id="remember" name="remember" type="checkbox"></input>
            </div>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login__form-login">Login</button>
          <p className='login__form-signup'>New to AccessiLingo? <a href="#">Create an Account</a></p>
        </form>
      </div>
      <div className='login__img'></div>
    </div>
  );
};

export default LoginPage;
