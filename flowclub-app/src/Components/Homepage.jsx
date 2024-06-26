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
    { start: "2024-04-21T09:00:00", end: "2024-04-21T10:00:00", id: "1", text: "1Hr Flow Video Meeting (Host) - Click to join", path: "/meeting-screen-host", barColor: "#f68b1f" },
    { start: "2024-04-23T11:00:00", end: "2024-04-23T12:00:00", id: "2", text: "1Hr Flow Video Meeting (Regular User) - Click to join", path: "/meeting-screen-user", barColor: "#6aa84f" },
    { start: "2024-04-24T17:00:00", end: "2024-04-24T18:00:00", id: "3", text: "Goal: Finish Report", path: "/home",  barColor: "#3d85c6"},
    { start: "2024-04-25T17:00:00", end: "2024-04-25T18:00:00", id: "4", text: "Goal: Study For Exam", path: "/home",  barColor: "#3d85c6" },
    { start: "2024-04-26T17:00:00", end: "2024-04-26T18:00:00", id: "5", text: "Goal: Perform Kfold validation on Data", path: "/home", barColor: "#ffd966" },

  ];

  const calendarClick = (args) => {
    const event = events.find(e => e.id === args.e.id());
    if (event && event.path){
      navigate(event.path);
    }
  };

  const calendarConfig = {
      viewType: "Week",
      startDate: DayPilot.Date.today(),
      events: events,
      onEventClick: calendarClick
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
          <button onClick={navigateTo('/schedule-session')} className="scheduleSessionButtonHP">
            Schedule Session
          </button>
          <button onClick={navigateTo('/join-session')} className="joinSessionButtonHP">
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