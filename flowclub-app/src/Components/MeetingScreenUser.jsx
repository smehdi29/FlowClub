import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/MeetingScreenUser.css';

const MeetingScreenUser = () => {
  const [activeTab, setActiveTab] = useState('Goals');
  const [content, setContent] = useState('');

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
            <div>User 1</div>
            <div>User 2</div>
            <div>User 3</div>
          </>
        );
        break;
      case 'Chat':
        setContent('');
        break;
      default:
        setContent('');
    }
  };

  const navigate = useNavigate(); // Define navigate function

  const leaveMeeting = () => {
    navigate('/home'); // Use navigate function to redirect
  };

  return (
    <div className="meeting-page">
      <div className="meeting-title">1 Hr Flow (8am-9am)</div>
      <div className="row" style={{ paddingTop: '30px' }}>
        <div className="column">
          <div className="camera-frame" style={{ backgroundColor: 'black', width: '200px', height: '200px', marginRight: '150px', marginBottom: '10px' }}></div>
          <div className="time-left" style={{marginRight: '150px'}}>Time Left: XX:XX</div>
          <button className="leave-meeting-btn" onClick={leaveMeeting} style={{marginRight: '150px'}}>Leave Meeting</button>
        </div>

        <div className="column" style={{ marginRight: '1px' }}>
          <div className="camera-frame" style={{ backgroundColor: 'black', width: '200px', height: '200px', marginBottom: '10px' }}></div>
        </div>

        <div className="column" style={{ marginLeft: '58px', marginLeft: '100px' }}>
          <div className="content-box">
            <div className="tabs">
              <div className={activeTab === 'Goals' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Goals')}>Goals</div>
              <div className={activeTab === 'Users' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Users')}>Users</div>
              <div className={activeTab === 'Chat' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Chat')}>Chat</div>
            </div>
            <div className="tab-content">{content}</div>
          </div>
        </div>
      </div>

      <div className="row" style={{ paddingTop: '50px' }}>
        <div className="camera-frame" style={{ backgroundColor: 'black', width: '200px', height: '200px', marginRight: '210px', marginBottom: '10px' }}></div>
        <div className="camera-frame" style={{ backgroundColor: 'black', width: '200px', height: '200px', marginRight: '210px', marginBottom: '10px' }}></div>
        <div className="camera-frame" style={{ backgroundColor: 'black', width: '200px', height: '200px', marginBottom: '10px' }}></div>
      </div>
    </div>
  );
};

export default MeetingScreenUser;