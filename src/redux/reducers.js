import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './actions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const addTask = [...state.tasks, { id: Date.now(), text: action.payload, completed: false }];
      localStorage.setItem('tasks', JSON.stringify(addTask));
      return {
        ...state,
        tasks: addTask,
      };
    case DELETE_TASK:
      const deleteTask = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(deleteTask));
      return {
        ...state,
        tasks: deleteTask,
      };
    case EDIT_TASK:
      const editTask = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, text: action.payload.updatedTask } : task
      );
      localStorage.setItem('tasks', JSON.stringify(editTask));
      return {
        ...state,
        tasks: editTask,
      };
    case TOGGLE_TASK:
      const toggleTask = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggleTask));
      return {
        ...state,
        tasks: toggleTask,
      };
    default:
      return state;
  }
};

export default taskReducer;
