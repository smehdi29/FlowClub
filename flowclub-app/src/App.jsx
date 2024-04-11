import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Homepage from './components/Homepage'
import LoginPage from './components/LoginPage';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/signup" exact element={<CreateAccount />} />
        <Route path="/home" exact element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
