import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
