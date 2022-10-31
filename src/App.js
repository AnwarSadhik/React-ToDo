import React, { useState } from "react";
import Header from "./components/Header";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasksList")) || []
  );
  const [newTask, setNewTask] = useState("");

  const setAndSaveTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem("tasksList", JSON.stringify(newTasks));
  };

  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTask = { id, checked: false, task };
    const listItems = [...tasks, myNewTask];
    setAndSaveTasks(listItems);
  };

  const handleCheck = (id) => {
    const listItems = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setAndSaveTasks(listItems);
  };
  const handleDelete = (id) => {
    const listItems = tasks.filter((task) => task.id !== id);
    setAndSaveTasks(listItems);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
  };
  return (
    <>
      <Header />
      <AddTasks
        newTask={newTask}
        setNewTask={setNewTask}
        value={newTask}
        handleSubmit={handleSubmit}
        addTask={addTask}
      />
      <Tasks
        tasks={tasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer tasks={tasks} />
    </>
  );
}

export default App;
