import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/JoinSession.css';
import Header from './Header';

function JoinSession() {
  const navigate = useNavigate();

  const handleJoinUser = () => {
    navigate('/meeting-screen-user');
  };

  const handleJoinHost = () => {
    navigate('/meeting-screen-host');
  };

  return (
    <div className="joinSessionContainer">
      <Header />
      <div className="JoinSession">
        <div className="centered">
          <h1>Join a Meeting!</h1>
          <h2>Enter the meeting link found in your email</h2>
          <input type="text" className="inputBox" placeholder="Meeting Link" />
          <div className="buttonsContainer">
            <button onClick={handleJoinUser}>Join</button>
            <button onClick={handleJoinHost}>Join as a host</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default JoinSession;
