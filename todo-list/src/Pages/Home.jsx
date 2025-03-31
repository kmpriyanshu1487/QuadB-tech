import React from 'react'
import Tabs from "../components/tabs/Tabs.jsx";
import TodoForm from "../components/todoform/TodoForm";
import Todolist from "../components/todolist/Todolist";
import { useEffect, useState } from "react";


import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [selectedtab, setSelectedTab] = useState("All");
  const [task, setTask] = useState(null);
  const [message, setMessage] = useState(null);

  // Store tasks in local storage
  const storeDataLocal = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  // Retrieve tasks from local storage
  const getRecordsfromLocal = (key) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  };

  const handleAddTask = (taskTitle, id = "") => {
    if (!taskTitle.trim()) return;

    let updatedTasks;
    let alertMessage = "";

    if (id) {
      updatedTasks = tasks.map((item) =>
        item.id === id ? { ...item, title: taskTitle } : item
      );
      alertMessage = "Task has been updated successfully!";
    } else {
      const taskId =
        tasks.length > 0 ? Math.max(...tasks.map((item) => item.id)) + 1 : 1;
      const newTask = { id: taskId, title: taskTitle, isCompleted: false };
      updatedTasks = [...tasks, newTask];
      alertMessage = "Task has been added successfully!";
    }

    setMessage(alertMessage);
    setTasks(updatedTasks);
    storeDataLocal("localTasks", updatedTasks);
    setTask(null);

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  useEffect(() => {
    const records = getRecordsfromLocal("localTasks");
    if (records.length > 0) {
      setTasks(records);
    }
  }, []);

  return (
    <>
    
      <div className="container">
        {message && <div className="alert success">{message}</div>}
        <TodoForm handleAddTask={handleAddTask} task={task} />
        <Tabs selectedtab={selectedtab} setSelectedTab={setSelectedTab} />
        <Todolist
          tasks={tasks}
          setTasks={setTasks}
          filter={selectedtab}
          setTask={setTask}
        />
      </div>
    </>
  );
}


export default Home;
