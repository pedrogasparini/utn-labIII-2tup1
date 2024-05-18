import React, { useState } from 'react';

const NewTask = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskName.trim()) {
            addTask(taskName);
            setTaskName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(event) => setTaskName(event.target.value)}
                placeholder="Enter a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default NewTask;
