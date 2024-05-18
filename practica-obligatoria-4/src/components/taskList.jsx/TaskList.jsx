import React from 'react';
import TaskItem from '../taskItem/TaskItem';

const TaskList = ({ tasks, completedTask, deleteTask }) => {
    return (
        <ul >
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    completedTask={completedTask}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
};

export default TaskList;
