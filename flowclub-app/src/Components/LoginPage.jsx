import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LoginPage.css';
import Header from './Header.jsx';
import GoogleLogo from './public/images/GoogleLogo.png';

const LoginPage = () => {
    const navigate = useNavigate();
    const navigateTo = (path) => () => navigate(path);
    const navigateExternal = (url) => {
      return () => window.location = url;
  };
    return (
      <div className="loginPageContainer">
        <Header />
        <div className="loginPage">
          <div className="signInTitle">
            <p>Sign in</p>
          </div>
          <p className="signInSubheading">Enter your email and password</p>
          <form className="loginForm">
            <input
              className="userNameContainer"
              type="text"
              name="email"
              placeholder="Email"
            />
            <input
              className="passwordContainer"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button className="signInButton" onClick={navigateTo('/home')}>Sign in</button>
            <p className="orContinueWith">-----or continue with-----</p>
            <button
              className="googleButton"
              onClick={navigateExternal('https://www.google.com/')}>    
                <img src={GoogleLogo} alt="Google sign-in"/>
                Google
            </button>
            <p className="orContinueWith">By clicking continue, you agree to our <b>Terms of Service</b> and <b>Privacy Policy</b></p>

            <button className="createAccountButton" onClick={navigateTo('/signup')}>Don't have an account? Create one.</button>
          </form>
        </div>
      </div>
    )
}
export default LoginPage;