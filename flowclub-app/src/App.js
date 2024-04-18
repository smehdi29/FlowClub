import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Homepage from './Components/Homepage';
import LoginPage from './Components/LoginPage';
import CreateAccount from './Components/CreateAccount';
import MyProfile from './Components/MyProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/signup" exact element={<CreateAccount />} />
        <Route path="/home" exact element={<Homepage />} />
        <Route path="/profile" exact element = {<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
