import React from 'react';

const ListItem = ({ goal, priority, dueDate }) => {
  return (
    <div className="list-item">
      <h3>{goal}</h3>
      <p><strong>Priority:</strong> {priority}</p>
      <p><strong>Due Date:</strong> {dueDate}</p>
    </div>
  );
}

export default ListItem;