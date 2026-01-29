import { useState, useRef } from "react";
export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd(title, description);
    setTitle("");
    setDescription("");
    titleRef.current.focus();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        ref={titleRef}
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add Task</button>
    </form>
  );
}
