import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Homepage.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import NavBar from './NavBar.jsx';
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";

const Homepage = () => {
    const navigate = useNavigate();
    const navigateTo = (path) => () => navigate(path);
    const events = [
      { start: "2024-04-14T09:00:00", end: "2024-04-14T11:00:00", id: "1", text: "Event 1" },
  ];

  const calendarConfig = {
      viewType: "Week",
      startDate: DayPilot.Date.today(),
      events: events
  };

    return (
      <div className="homepageContainer">
        <Header />
        <div className="homepageContent">
          <div className="homepageTitle">
            <p>Welcome! You will thank yourself later</p>
          </div>
          <div className="homepageSubheading">
            <p>Look at your upcoming meetings or update yourself</p>
          </div>
          <NavBar />
          <div className="calendarSessionsContainer">
            <div className="calendarContainer">
              <DayPilotCalendar
                {...calendarConfig}
              />
            </div>
            <div className="sessionButtonsContainer">
            <button onClick={navigateTo('/scheduleSession')} className="scheduleSessionButtonHP">
              Schedule Session
            </button>
            <button onClick={navigateTo('/joinSession')} className="joinSessionButtonHP">
              Join Session
            </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
}
export default Homepage;