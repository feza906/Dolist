
import './App.css';
import {useState} from 'react';
import {Task} from './components/Task'
import { AddTask } from './components/AddTask';

function App() {
  const [todoList,setToDoList] = useState([]);
  const [newTask,setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value)
  };

  const handleClick = () => {
    const task = {
      id : todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setToDoList([...todoList,task]);
    

  }
  const updateTask = (id) => {
    setToDoList(
    todoList.map((task) => {
      if(task.id === id){
        return {...task,completed:true,}
      }
      else{
        return task;
      }
    }))

  }

  const deleteTask = (id) => {

      
      
      setToDoList(todoList.filter((task) =>task.id !== id));
  }

   return (
    <div className = "App bg-red-50 h-40 p-2">
      <h1 className='text-2xl mt-2'>Todo List</h1>
      <AddTask handleChange = {handleChange} handleClick={handleClick}/>
      <div className='task list grid grid-cols-1 mt-10 bg-red-200  '>
        {todoList.map((task) =>{
           return <Task taskName = {task.taskName} id={task.id} updateTask={updateTask} deleteTask = {deleteTask} completed = {task.completed}/>
})}
      </div>
    </div>
  );
}

export default App;
