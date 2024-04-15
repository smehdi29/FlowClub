import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import './css/MeetingScheduled.css';


const MeetingScheduled = () => {
  const navigate = useNavigate();
    return (
    <div className="meetingScheduledContainer">
        <Header />
       
        <div className="content">
            <h1>Meeting Scheduled!</h1>
            <p>Add another session or go to a different page</p>
            <button id='add' onClick={()=>navigate('/schedule-session')}>+ Add a session</button>
            <NavBar />
        </div>
        <Footer />
    </div>
  )
}

export default MeetingScheduled;