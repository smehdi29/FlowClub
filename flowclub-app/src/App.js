import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Homepage from './Components/Homepage';
import LoginPage from './Components/LoginPage';
import CreateAccount from './Components/CreateAccount';
import ScheduleSession from './Components/ScheduleSession';
import MeetingScheduled from './Components/MeetingScheduled';

import MyGoals from './Components/MyGoals';

import JoinSession from './Components/JoinSession';
import MeetingScreenUser from './Components/MeetingScreenUser';
import MeetingScreenHost from './Components/MeetingScreenHost';
import UserFullScreen from './Components/UserFullScreen';
import MyProfile from './Components/MyProfile';

import './App.css';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/signup" exact element={<CreateAccount />} />
        <Route path="/home" exact element={<Homepage />} />
        <Route path="/schedule-session" exact element={<ScheduleSession />} />
        <Route path="/meeting-scheduled" exact element={<MeetingScheduled />} />
        <Route path="/my-goals" exact element={<MyGoals />} />
        <Route path="/join-session" exact element={<JoinSession />} />
        <Route path="/meeting-screen-user" exact element={<MeetingScreenUser />} />
        <Route path="/meeting-screen-host" exact element={<MeetingScreenHost />} />
        <Route path="/fullscreen" exact element={<UserFullScreen/>} />
        <Route path="/profile" exact element={<MyProfile/>} />

      </Routes>
    </Router>
  );
}

export default App;
