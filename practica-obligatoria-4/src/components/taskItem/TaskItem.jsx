import React from 'react';

const TaskItem = ({ task, completedTask, deleteTask }) => {
    return (
        <li className={`task ${task.completed ? 'completed' : ''}`}>
            <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'lightgray' : 'black' }}
                onClick={() => completedTask(task.id)}
            >
                {task.name}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem;
