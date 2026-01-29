import { useState, useEffect } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  // Load tasks (componentDidMount replacement)
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(stored);
  }, []);

  // Persist tasks (componentDidUpdate replacement)
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        description,
        status: "Pending",
        createdAt: new Date().toLocaleString()
      }
    ]);
  };

  const updateStatus = (id, status) => {
    setTasks(
      tasks.map(t => (t.id === id ? { ...t, status } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return { tasks, addTask, updateStatus, deleteTask };
}

