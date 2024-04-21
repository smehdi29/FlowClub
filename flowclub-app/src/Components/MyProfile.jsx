import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/MyProfile.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import NavBar from './NavBar.jsx';
import firstImage from './css/CPU.png'
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";

const MyProfile = () => {
    const [image, setImage] = useState(firstImage); // State to store the selected image URL
    const [readOnly, setReadOnly] = useState(true);

    const [job, setJob] = useState("Software Engineer"); // Job input Start
    const [isEditing, setIsEditing] = useState(false);  // Is editing or not
    const [hobbies, setHobbies] = useState("Coding, Reading, Running"); // Hobbies input Start
    const [bio, setBio] = useState("I am a passionate ... (add more bio content here)"); // Bio input Start
    const [name, setName] = useState("Brandon Gonzalez"); // Name input Start
    const handleJobChange = (e) => {
        setJob(e.target.value);
    };

    const handleHobbiesChange = (e) => {
        setHobbies(e.target.value);
    };

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const enableEdit = () => {
        setReadOnly(false);
        setIsEditing(true);
        // You can uncomment and include other elements if needed
        // document.getElementById("hobbies").removeAttribute("readonly")
        // document.getElementById("bio").removeAttribute("readonly")
        document.getElementById("AllDone").removeAttribute("hidden");
        document.getElementById("ChangePL").removeAttribute("hidden");
        document.getElementById("ChangePB").removeAttribute("hidden");
        document.getElementById("EditPage").setAttribute("hidden", "hidden");
    };

    const disableEdit = () => {
        setReadOnly(true);
        setIsEditing(false);
        document.getElementById("AllDone").setAttribute("hidden", "hidden");
        document.getElementById("ChangePL").setAttribute("hidden", "hidden");
        document.getElementById("ChangePB").setAttribute("hidden", "hidden");
        document.getElementById("EditPage").removeAttribute("hidden");
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
      <div className="homepageContainer">
        <Header />
        <div className="homepageContent">
          <div className="homepageTitle">
            <p>My Profile</p>
          </div>
          <NavBar />
          <div className="profile-container">
                <section className="profile-info">
                    <label htmlFor="job" style={{ fontWeight: 'bold' }}>Job:</label>
                    {isEditing ? (
                        <input type="text" id="job" readOnly={readOnly} onChange = {handleJobChange} name="job" defaultValue={job}/>
                    ) : (
                        <p>{job}</p>
                    )} 
                    <label htmlFor="hobbies" style={{ fontWeight: 'bold' }}>Hobbies:</label>
                    {isEditing ? (
                        <input type="text" id="hobbies" readOnly={readOnly} onChange={handleHobbiesChange} name="hobbies" defaultValue={hobbies} />
                    ) : (
                        <p>{hobbies}</p>
                    )}
                    <label htmlFor="bio" style={{ fontWeight: 'bold' }}>Bio:</label>
                    {isEditing ? (
                        <textarea id="bio" readOnly={readOnly} onChange={handleBioChange} name="bio" placeholder="Write your bio">{bio}</textarea>
                    ) : (
                        <p>{bio}</p>
                    )}
                    <button class="edit-label" id = "EditPage" onClick={enableEdit}>Edit Profile</button>
                </section>

                <div className="profile-image">
                        <label htmlFor="name" className="profile-name">
                            {isEditing ? (
                                <input type="text" id="name" readOnly={readOnly} onChange={handleNameChange} name="name" defaultValue={name} />
                            ) : (
                                <p style={{ fontWeight: 'bold' }}>{name}</p>
                            )}
                        </label>
                    <img className="profile-pic" src={image}/>
                        {/* Button to change image */}
                    <div className="upload-btn-wrapper">
                        <label id="ChangePL" hidden>Change Image: </label>
                        {/* Input field to select image */}
                        <input id="ChangePB" type="file" accept="image/*" onChange={handleImageChange} hidden/>
                    </div>
            </div>
          </div>
          <div className="AllDone" id="AllDone" hidden>
            <button class = "disable-label" onClick = {disableEdit}> {isEditing ? "All Done!" : "Edit"} </button>
          </div>
        </div>
        <Footer />
      </div>
    )
}
export default MyProfile;
