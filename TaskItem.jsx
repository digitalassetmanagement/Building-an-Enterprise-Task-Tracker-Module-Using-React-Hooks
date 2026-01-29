export default function TaskItem({ task, onStatusChange, onDelete }) {
  return (
    <div className={`task-card ${task.status.toLowerCase()}`}>
      
      <div className="task-header">
        <h4>{task.title}</h4>
        <span className={`status-badge ${task.status.toLowerCase()}`}>
          {task.status}
        </span>
      </div>

      <p>{task.description}</p>
      <small>Created: {task.createdAt}</small>

      <div className="actions">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button onClick={() => onDelete(task.id)}>Remove</button>
      </div>
    </div>
  );
}
