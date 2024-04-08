import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/CreateAccount.css';
import Header from './Header.jsx';

const CreateAccount = () => {
    const navigate = useNavigate();

    return (
      <div className="createAccountContainer">
        <Header />
      </div>
    )
}
export default CreateAccount;