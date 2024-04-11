import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/CreateAccount.css';
import Header from './Header.jsx';
import GoogleLogo from './public/images/GoogleLogo.png';


const CreateAccount = () => {
    const navigate = useNavigate();
    const navigateTo = (path) => () => navigate(path);
    const navigateExternal = (url) => {
      return () => window.location = url;
  };
    return (
      <div className="createAccountContainer">
        <Header />
        <div className="createAccountPage">
          <div className="createAccountTitle">
            <p>Create Account</p>
          </div>
          <p className="createAccountSubheading">Enter your email and a password to sign up for this app</p>
          <form className="createAccountForm">
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
            <button className="createAccountButtonOnCAPage" onClick={navigateTo('/')}>Sign up with email</button>
            <p className="orContinueWith">-----or continue with-----</p>
            <button
              className="googleButton"
              onClick={navigateExternal('https://www.google.com/')}>    
                <img src={GoogleLogo} alt="Google sign-in"/>
                Google
            </button>
            <p className="orContinueWith">By clicking continue, you agree to our <b>Terms of Service</b> and <b>Privacy Policy</b></p>

            <button className="signInButtonOnCApage" onClick={navigateTo('/login')}>Already have an account? Sign in.</button>
          </form>
        </div>
      </div>
    )
}
export default CreateAccount;