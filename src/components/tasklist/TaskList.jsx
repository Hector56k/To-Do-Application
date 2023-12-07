import React from 'react';
import TaskItem from '/Users/hector56k/to-do-list-app-2/src/components/taskitem/TaskItem.jsx';
import '/Users/hector56k/to-do-list-app-2/src/components/tasklist/TaskList.css';

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {

    // Check if tasks is undefined or null
    if (!tasks) {
        return null; // or return a loading indicator, an error message, or an empty list
    }

    return (
        <ul>
            {tasks.map(task => (
                <TaskItem
                key={task.id}
                task={task}
                onDelete={() => onToggleComplete(task.id)}
                />
            ))}
        </ul>
    );
};

export default TaskList;