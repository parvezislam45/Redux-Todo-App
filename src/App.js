
import './App.css';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>To-Do List</h1>
      <TaskInput />
      <TaskList />
     
    </div>
  );
}

export default App;
