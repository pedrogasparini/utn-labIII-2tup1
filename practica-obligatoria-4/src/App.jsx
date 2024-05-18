import React, { useState } from 'react';
import TaskList from './components/taskList.jsx/TaskList';
import NewTask from './components/newTask/NewTask';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const completedTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="task-container">
      <section className='section-app'>
      <h1>Tasks</h1>
      <NewTask addTask={addTask} />
      <p>
      click the task to mark as completed
      </p>
      <TaskList tasks={tasks} completedTask={completedTask} deleteTask={deleteTask} />
    </section>
    </div>
  );
};

export default App;
