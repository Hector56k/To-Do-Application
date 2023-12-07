import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState('');

    const handleAddTask = () => {
        if (taskName.trim() !== '') {
            onAddTask(taskName);
            setTaskName('');
        }
    };

    return (
        <div>
            <input 
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
             />
             <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTaskForm;