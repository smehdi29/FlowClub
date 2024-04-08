import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Homepage.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Homepage = () => {
    const navigate = useNavigate();

    return (
      <div className="homepageContainer">
        <Header />
        <Footer />
      </div>
    )
}
export default Homepage;