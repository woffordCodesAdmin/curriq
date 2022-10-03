import { useState } from 'react';
import Header from './components/Header'
import Button from './components/Button'
import Tasks from './components/Tasks'
import './App.css';


function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "TaskUNO",
      day: "w01d01",
      reminder: true,
    },
    {
      id: "2",
      text: "TaskDOS",
      day: "w02d02",
      reminder: true,
    },
    {
      id: "3",
      text: "TaskTres",
      day: "w03d03",
      reminder: true,
    },
    {
      id: "4",
      text: "TaskCuatro",
      day: "w04d04",
      reminder: true,
    },
  ]);
  // deleteTask
  const deleteTask = (id) =>{
    console.log("DELETE")
  }
  return (
    <div className="App">
      <Header/>
      <Button color="green" text="Click Me"/>
      <Button color="blue" text="Press Me"/>
      <Button color="red" text="Instantiate Me"/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
