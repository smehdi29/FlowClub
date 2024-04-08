import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Homepage.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { VideoRoom } from './VideoRoom';

const Homepage = () => {
    const navigate = useNavigate();
    const [joined, setJoined] = useState(false);

    return (
      <div className="homepageContainer">
        <Header />
        {!joined && (
          <button onClick={() => setJoined(true)}>
            Join Room
          </button>
        )}
        {joined && <VideoRoom />}
        <Footer />
      </div>
    );
}

export default Homepage;
