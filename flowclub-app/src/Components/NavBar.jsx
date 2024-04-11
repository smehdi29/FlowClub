import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './css/NavBar.css';


const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navigateTo = (path) => () => navigate(path);
    const getButtonClass = (path) => {
        return location.pathname === path ? "active" : "";
    };
    
    return (
    <div className="navBarContainer">
        <button onClick={navigateTo('/home')} className={`navBarButtonHome ${getButtonClass('/home')}`}>
            Home
        </button>
        <button onClick={navigateTo('/goals')} className={`navBarButtonGoals ${getButtonClass('/goals')}`}>
            My Goals
        </button>
        <button onClick={navigateTo('/profile')} className={`navBarButtonProfile ${getButtonClass('/profile')}`}>
            My Profile
        </button>
    </div>
    )
}
export default NavBar;