import React, { useState } from 'react';
import Header from './components/header/Header';
import TaskList from './components/tasklist/TaskList';
import AddTaskForm from './components/addtaskform/AddTaskForm';
import Footer from './components/footer/Footer';
import TransitionalBackground from './components/transitionalbackground/TransitionalBackground';
import './App.css';

const App = () => {

  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task to list
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks,newTask]);
  };

  // Function to delete a task from the list
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Function to toggle the completion status of a task
  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task 
      ));
  };

  return (
  <>
    <TransitionalBackground />
    <div className='main-container'>
      {/* Header component */}
      <Header title="To Do List" />

      {/* AddTaskForm component */}
      <AddTaskForm onAddTask={addTask} />

      {/* TaskList component */}
      <TaskList task={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} />
    </div>

   {/* Footer component */}
    <Footer />
    </>
  );
};

export default App;