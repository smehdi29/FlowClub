import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateTo = () => () => {
        let destinationPath = '/';

        if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') {
            destinationPath = '/';
        } else {
            destinationPath = '/home';
        }

        navigate(destinationPath);
    };


    return (
        <header className="header">
            <p className="headerTitle" onClick={navigateTo()}>Flow.Club</p>
        </header>
    );
}

export default Header;