import React, { useState } from 'react';
import Header from './Header.jsx';
import { useNavigate } from 'react-router-dom';
import './css/MeetingScreenUser.css';

const MeetingScreenUser = () => {
  const [activeTab, setActiveTab] = useState('Goals');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [usernames, setUsernames] = useState(['Host', 'User 1', 'User 2', 'User 3']);
  const [isMuted, setIsMuted] = useState([false, false, false]);
  const [volume, setVolume] = useState([50, 50, 50, 50]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'Goals':
        setContent(
          <>
            <div>Goal 1</div>
            <div>Goal 2</div>
            <div>Goal 3</div>
          </>
        );
        break;
      case 'Users':
        setContent(
          <>
            {usernames.map((username, index) => (
              <div key={index}>{username}</div>
            ))}
          </>
        );
        break;
      case 'Chat':
        setContent(
          <div className="chat-box">
            <div className="message-input">
              <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Type your message here..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        );
        break;
      default:
        setContent('');
    }
  };

  const navigate = useNavigate();

  const leaveMeeting = () => {
    navigate('/home');
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      setChatMessages([...chatMessages, message]);
      setMessage('');
    }
  };

  const toggleMute = (index) => {
    const updatedMutedState = [...isMuted];
    updatedMutedState[index] = !updatedMutedState[index];
    setIsMuted(updatedMutedState);
  };

  const handleVolumeChange = (index, e) => {
    const updatedVolume = [...volume];
    updatedVolume[index] = parseInt(e.target.value);
    setVolume(updatedVolume);
  };

  return (
    <div className="meeting-page">
      <Header />
      <div className="content-container" style={{ width: '80%', margin: '0 auto', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div className="meeting-title">1 Hr Flow (8am-9am)</div>
        <div className="tabs" style={{ width: '50%', margin: '0 auto' }}>
          <div className={activeTab === 'Goals' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Goals')}>Goals</div>
          <div className={activeTab === 'Users' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Users')}>Users</div>
          <div className={activeTab === 'Chat' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Chat')}>Chat</div>
        </div>
        <div className="tab-content">{content}</div>
        <div className="row" style={{ paddingTop: '30px' }}>
          {usernames.map((username, index) => (
            <div key={index} className="column">
              <div className="camera-frame" style={{ backgroundColor: 'black', width: '200px', height: '200px', marginBottom: '10px' }}></div>
              <div>{username}</div>
              <div>
                <button onClick={() => toggleMute(index)}>{isMuted[index] ? 'Unmute' : 'Mute'}</button>
                <input type="range" min="0" max="100" value={volume[index]} onChange={(e) => handleVolumeChange(index, e)} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button className="leave-meeting-btn" onClick={leaveMeeting}>Leave Meeting</button>
        </div>
      </div>
    </div>
  );
};

export default MeetingScreenUser;
