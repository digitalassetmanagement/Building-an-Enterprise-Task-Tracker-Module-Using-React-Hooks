import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useTasks } from "../hooks/useTasks";

export default function TaskTracker() {
  const { tasks, addTask, updateStatus, deleteTask } = useTasks();

  return (
    <div className="task-tracker">
      <h2>Enterprise Task Tracker</h2>

      <TaskForm onAdd={addTask} />

      <TaskList
        tasks={tasks}
        onStatusChange={updateStatus}
        onDelete={deleteTask}
      />
    </div>
  );
}
