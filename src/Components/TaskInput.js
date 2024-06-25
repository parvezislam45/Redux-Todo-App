import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div className="input-group mb-3">
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
              style={{ height: "50px" }}
              type="text"
              className="form-control border border-primary"
              placeholder="Add New Task"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
          </div>
          <div className="d-grid">
            <button
              onClick={handleAddTask}
              type="button"
              className="btn btn-info"
              style={{ height: "50px" }}
            >
              Add New Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
