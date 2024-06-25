import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask } from "../redux/actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(null);
  const [currentTask, setCurrentTask] = useState("");

  const handleEditTask = (id, text) => {
    setIsEditing(id);
    setCurrentTask(text);
  };

  const handleSaveTask = (id) => {
    if (currentTask.trim()) {
      dispatch(editTask(id, currentTask));
      setIsEditing(null);
      setCurrentTask("");
    }
  };
  const handleDeleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(id));
    }
  };

  return (
    <div className="table-container">
    <table className="custom-table">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
        
            <td className="task-content">
              {isEditing === task.id ? (
                <input
                  type="text"
                  value={currentTask}
                  onChange={(e) => setCurrentTask(e.target.value)}
                />
              ) : (
                <span>{task.text}</span>
              )}
            </td>
            <td className="action-buttons">
              {isEditing === task.id ? (
                <div className="button-group">
                  <button className="btn btn-success btn-sm" onClick={() => handleSaveTask(task.id)}>Update</button>
                  <button className="btn btn-warning btn-sm" onClick={() => setIsEditing(null)}>Cancel</button>
                </div>
              ) : (
                <div className="button-group">
                  <button className="btn btn-success btn-sm" onClick={() => handleEditTask(task.id, task.text)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default TaskList;
