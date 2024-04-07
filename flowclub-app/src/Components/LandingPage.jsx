import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LandingPage.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
      <div className="landingPageContainer">
        <Header />
        <div className="landingPageContent">
          <h2>Flow.Club</h2>
          <p>Fight procrastination.<br />Get your work done.<br />Go have fun.</p>
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
        <div className="landingPageImage">
          <img src="path_to_image" alt="Host" />
        </div>
        <Footer />
      </div>
    )
}
export default LandingPage;