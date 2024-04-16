import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './css/FullScreen.css';

const UserFullScreen = () => {
  return (
    <div className="full-screen-view">
      <div className="cam">User Camera</div>
        <div className="box">
          <div className="tab-con">
            <div className='go'>Goal 1</div>
            <div className='gt'>Goal 2</div>
          </div>
    </div>
      <Link to="/meeting-screen-host" className="back-link">Back to Meeting</Link>
    </div>
  );
};

export default UserFullScreen;
