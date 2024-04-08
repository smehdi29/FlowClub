import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LoginPage.css';
import Header from './Header.jsx';

const LoginPage = () => {
    const navigate = useNavigate();

    return (
      <div className="loginPageContainer">
        <Header />
      </div>
    )
}
export default LoginPage;