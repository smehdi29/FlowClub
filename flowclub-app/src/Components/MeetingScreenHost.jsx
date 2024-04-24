import React, { useState } from 'react';
import Header from './Header.jsx';
import { useNavigate, Link } from 'react-router-dom';
import './css/MeetingScreenHost.css';

const MeetingScreenHost = () => {
  const [activeTab, setActiveTab] = useState('Goals');
  const [content, setContent] = useState('');
  const [isBreakModalOpen, setIsBreakModalOpen] = useState(false);
  const [breakLength, setBreakLength] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [activeUser, setActiveUser] = useState(null);

  const users = [
    { id: 1, name: 'Lori Lightfoot', goals: ['User 1 Goal 1', 'User 1 Goal 2', 'User 1 Goal 3'] },
    { id: 2, name: 'Derrick Rose', goals: ['Triple Double', 'Score 80', 'User 2 Goal 3'] },
  ];

  const handleTabClick = (userId) => {
    const user = users.find(user => user.id === userId);
    if (user) {
      setActiveTab('Goals');
      setActiveUser(userId);
      setContent(
        user.goals.map((goal, index) => (
          <div key={index}>{goal}</div>
        ))
      );
    } else {
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
      <Header />
      <div className="meeting-title">1 Hr Flow (8am-9am)</div>
      <div className="top">
        {users.map(user => (
          <div className="pilar" key={user.id}>
            <div className='user-square'>
              <div className="camera-frame user-camera" onClick={() => handleTabClick(user.id)}>
                {user.name}'s Camera
              </div>
              <Link to="/fullscreen" className="full-screen-link">Full Screen</Link>
            </div>
            <div className="content-box">
              <div className="tabs">
                <div className={activeTab === 'Goals' && activeUser === user.id ? 'tab active' : 'tab'} onClick={() => handleTabClick(user.id)}>Goals</div>
              </div>
              <div className="tab-content">
                {activeUser === user.id && content}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="middle">
        <div className="host">
          <div className="camera-frame host-camera">Host Camera</div>
          <button className="leave-meeting-btn" onClick={leaveMeeting}>Leave Meeting</button>
          <button className="take-break-btn" onClick={handleTakeBreak}>Take Break</button>
          <div className="time-remaining">Time Remaining: {formatTime(timeRemaining)}</div>
          <div className="clock">Clock</div>
        </div>
      </div>
      <div className="bottom"></div>
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
