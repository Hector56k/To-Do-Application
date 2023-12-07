import React from 'react';
import '../taskitem/TaskItem.css';

const TaskItem = ({ task, onDelete, onToggleComplete }) => {
    return (
        <li>
            <span>{task.name}</span>
            <button onClick={onDelete}>Delete</button>
            <input
            type="checkbox"
            checked={task.completed}
            onChange={onToggleComplete}
             />
        </li>
    );
};

export default TaskItem;