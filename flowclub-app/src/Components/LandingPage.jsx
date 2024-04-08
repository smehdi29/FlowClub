import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LandingPage.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import LandingPagePicture from './public/images/LandingPagePicture.png';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
      <div className="landingPageContainer">
        <Header />
        <div className="landingPageContent">
          <h2>Flow.Club</h2>
          <p>Fight procrastination.<br />Get your work done.<br />Go have fun.</p>
          <button className="lpLoginButton"onClick={() => navigate('/login')}>Login</button>
        </div>
        <div className="landingPageImage">
          <img className="landingPagePic" src={LandingPagePicture} alt="Host" />
        </div>
        <Footer />
      </div>
    )
}
export default LandingPage;