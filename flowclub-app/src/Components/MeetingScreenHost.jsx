import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './css/MeetingScreenHost.css';

const MeetingScreenHost = () => {
  const [activeTab, setActiveTab] = useState('Goals');
  const [content, setContent] = useState('');
  const [isBreakModalOpen, setIsBreakModalOpen] = useState(false);
  const [breakLength, setBreakLength] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);

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

  const navigate = useNavigate();

  const leaveMeeting = () => {
    navigate('/home');
  };

  const openBreakModal = () => {
    setIsBreakModalOpen(true);
  };

  const closeBreakModal = () => {
    setIsBreakModalOpen(false);
  };

  const handleTakeBreak = () => {
    openBreakModal();
  };

  const handleBreakLengthSelection = (length) => {
    setBreakLength(length);
    setTimeRemaining(length * 60);
    closeBreakModal();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="meeting-page-host">
      <div className="meeting-title">1 Hr Flow (8am-9am)</div>
      <div className="top">
        <div className="pilar"></div>
        <div className="pilar">
          
          <div className="camera-frame user-camera">User Camera</div>
          <Link to="/fullscreen" className="full-screen-link">Full Screen</Link>
          <div className="content-box">
            <div className="tabs">
              <div className={activeTab === 'Goals' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Goals')}>Goals</div>
              <div className={activeTab === 'Users' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Users')}>Users</div>
              <div className={activeTab === 'Chat' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Chat')}>Chat</div>
            </div>
            <div className="tab-content">{content}</div>
          </div>
        </div>
        <div className="pilar">
          <div className="camera-frame user-camera">User Camera</div>
          <Link to="/fullscreen" className="full-screen-link">Full Screen</Link>
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
      <div className="middle">
        <div className="host">
          <div className="camera-frame host-camera">Host Camera</div>
          <button className="leave-meeting-btn" onClick={leaveMeeting}>Leave Meeting</button>
          <button className="take-break-btn" onClick={handleTakeBreak}>Take Break</button>
          <div className="time-remaining">Time Remaining: {formatTime(timeRemaining)}</div>
          <div className="clock">Clock</div>
        </div>
        <div className="pilar">
          <div className="camera-frame user-camera">User Camera</div>
          <Link to="/fullscreen" className="full-screen-link">Full Screen</Link>
          <div className="content-box">
            <div className="tabs">
              <div className={activeTab === 'Goals' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Goals')}>Goals</div>
              <div className={activeTab === 'Users' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Users')}>Users</div>
              <div className={activeTab === 'Chat' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Chat')}>Chat</div>
            </div>
            <div className="tab-content">{content}</div>
          </div>
        </div>
        <div className="pilar">
          <div className="camera-frame user-camera">User Camera</div>
          <Link to="/fullscreen" className="full-screen-link">Full Screen</Link>
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
      {/* Third Row */}
      <div className="bottom">
        <div className="pilar"></div>
        <div className="pilar">
          <div className="camera-frame user-camera">User Camera</div>
          <Link to="/fullscreen" className="full-screen-link">Full Screen</Link>
          <div className="content-box">
            <div className="tabs">
              <div className={activeTab === 'Goals' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Goals')}>Goals</div>
              <div className={activeTab === 'Users' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Users')}>Users</div>
              <div className={activeTab === 'Chat' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Chat')}>Chat</div>
            </div>
            <div className="tab-content">{content}</div>
          </div>
        </div>
        <div className="pilar">
          <div className="camera-frame user-camera">User Camera</div>
          <Link to="/fullscreen" className="full-screen-link">Full Screen</Link>
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
      {isBreakModalOpen && (
        <div className="break-modal">
          <div>Please select the break length:</div>
          <button onClick={() => handleBreakLengthSelection(5)}>5 Minutes</button>
          <button onClick={() => handleBreakLengthSelection(10)}>10 Minutes</button>
          <button onClick={() => handleBreakLengthSelection(15)}>15 Minutes</button>
        </div>
      )}
    </div>
  );
};

export default MeetingScreenHost;
