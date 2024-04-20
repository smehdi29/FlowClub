import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import "./css/MyGoals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCode, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import ListItem from './ListItem';
import Header from './Header';
import Footer from './Footer';


const MyGoals = () => {
    const navigate = useNavigate;
    const [goals, setGoals] = useState([
        { id: 1, text: "Finish Report", priority: "High", dueDate: "05/01/2024", completed: false, editing:false },
        { id: 2, text: "Study for exam", priority: "Medium", dueDate: "05/01/2024", completed: false, editing: false },
        { id: 3, text: "Perform Kfold validation on Data", priority: "High", dueDate: "04/12/2024", completed: true, editing:false }
    ]);
    const [showForm, setShowForm] = useState(false);

    const toggleCompletion = (id) => {
        setGoals(goals.map(goal =>
            goal.id === id ? { ...goal, completed: !goal.completed } : goal
        ));
    };

    const toggleEditing = (id) => {
        setGoals(goals.map(goal =>
            goal.id === id ? { ...goal, editing: !goal.editing } : goal
        ));
    };

    const handleGoalUpdate = (id, updatedGoal) => {
        setGoals(goals.map(goal =>
            goal.id === id ? { ...goal, ...updatedGoal, editing: false } : goal
        ));
    };

    // Show the form when the button is clicked
    const handleAddGoalClick = () => {
        setShowForm(true);//show the form now 
    };

    // To be passed into form component
    const handleFormSubmit = (newGoal) => {
        if(newGoal != null){
            setGoals([...goals, newGoal]);
        }
        setShowForm(false); 
    };



  return (
    <div className="goalsPage">
        <Header />
        <div className="goalsContainer">
            {/* If add a goal has been clicked, then show the form, otherwise show the default goals page */}
        {showForm ? (<GoalForm onSubmit={handleFormSubmit} />) : (
            <>
            <h1>Goals</h1>
            <NavBar />
            <div className="goalBox">
                <div className="toDo">
                    <h2>Goals To-DO</h2>
                    <ul className="list">
                            {goals.filter(goal => !goal.completed).map(goal => (
                                <li key={goal.id} >
                                    {goal.editing ? (<EditGoalForm goal={goal} onUpdate={(updatedGoal) => handleGoalUpdate(goal.id, updatedGoal)} />) 
                                    : (
                                        <>
                                        <div className = "innerListItem" onClick={() => toggleEditing(goal.id)}>
                                            <input type="checkbox" onChange={() => toggleCompletion(goal.id)} />
                                            <strong>{goal.text}</strong><br />
                                            <p className="indented">Priority: {goal.priority} <br />Due Date: {goal.dueDate}</p>
                                        </div>
                                        </>
                                    )}
                                    
                                </li>
                            ))}
                        </ul>
                </div>
                <div className="done">
                    <h2><FontAwesomeIcon icon={faCheck} className="doneIcon" />Recently Accomplished</h2>
                    <ul className="list">
                            {goals.filter(goal => goal.completed).map(goal => (
                                <li key={goal.id}>
                                    <input type="checkbox" onChange={() => toggleCompletion(goal.id)} checked />
                                    <strong>{goal.text}</strong>
                                </li>
                            ))}
                        </ul>
                </div>
            </div>
            <div className="addAGoal">
                <button className="addAGoalButton" onClick={handleAddGoalClick}>+ Add a goal</button>
            </div>
            </>)}
        </div>
        <Footer />
    </div>
  )
}

const GoalForm = ({ onSubmit }) => {
    const [goalText, setGoalText] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // create goal obj and generate rand id
        const newGoal = {
            id: Math.random(),
            text: goalText,
            priority,
            dueDate,
            completed: false
        };
        // pass in the new goal to the main goals page
        onSubmit(newGoal);
        // Reset form fields after submission
        setGoalText('');
        setPriority('Medium');
        setDueDate('');
    };

    //if the user wants to go back from the addGoals page
    const handleBackButton = (e) =>{
        onSubmit(null);
        setGoalText('');
        setPriority('Medium');
        setDueDate('');
    }

    return (
        <form onSubmit={handleSubmit} className="addGoalForm">
            <button className = "backButton" onClick={handleBackButton}>Back</button>
            <h2>Add a goal!</h2>
            <input type="text" placeholder="Enter goal" value={goalText} onChange={(e) => setGoalText(e.target.value)} />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
            <button id="submitGoal" type="submit">Add Goal</button>
        </form>
    );
};

// Component to edit goal when clicked upon
const EditGoalForm = ({ goal, onUpdate }) => {
    const [editedText, setEditedText] = useState(goal.text);
    const [editedPriority, setEditedPriority] = useState(goal.priority);
    const [editedDueDate, setEditedDueDate] = useState(goal.dueDate);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({
            text: editedText,
            priority: editedPriority,
            dueDate: editedDueDate
        });
    };
    const handleX = (e) => {
        onUpdate({
            text: goal.text,
            priority: goal.priority,
            dueDate: goal.dueDate
        })
    }

    return (
        <form onSubmit={handleSubmit} className="editGoalForm">
            <div className="firstLine">
                <FontAwesomeIcon icon={faCircleXmark} className="xIcon" onClick={handleX}/>
                <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} required />
            </div>
            <select value={editedPriority} onChange={(e) => setEditedPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input type="date" value={editedDueDate} onChange={(e) => setEditedDueDate(e.target.value)} required />
            <button id='updateGoalButton' type="submit">Update</button>
        </form>
    );
};
export default MyGoals;