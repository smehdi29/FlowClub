import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import './css/ScheduleSession.css';
const ScheduleSession = () => {
const navigate = useNavigate();
  return (
    <div className="pageContainer">
        <Header />
        <div className="title">
            <h1> Schedule a Session </h1>
            <p>Plan and host your own session</p>
        </div>
        <div className="form">
            <form>
                <div className="leftSide">
                    <div className="input1">
                        <div className="input1box">
                            <label>Title</label>
                            <input id = 'title' type='text' placeholder='Title'/>
                        </div>
                        <div className="input1box">
                            <label>Date and Time</label>
                            <input id = 'dandt' type='date'/>
                            <input type="time" id="appt" name="appt" min="09:00" max="18:00" />
                        </div>      
                    </div>
                    <br></br>
                    <label>Description <br/><textarea id='description' placeholder='Enter your description for the meeting here'/></label>
                    <br/><button type="submit" onClick={()=>navigate('/meeting-scheduled')}>SUBMIT</button>
                </div>
                
            </form>
            <div className="rightSide">
                    <h2>Settings</h2>
                    <label>
                        <input type="checkbox" /> Invite Only
                    </label>
                    <label>
                        <input type="checkbox" /> Presentation
                    </label>
                    <br />
                    <label>
                        Number of Participants:
                        <input type="number" min="1" />
                    </label>
                </div>
        </div>
    </div>
  )
}

export default ScheduleSession;
