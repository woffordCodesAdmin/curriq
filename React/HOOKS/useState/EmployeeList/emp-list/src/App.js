import './App.css';
import Homepage from './components/HomePage'
import EmployeePage from './components/EmployeePage';
import { useState } from 'react';
import workers from './models/workers';

function App() {
  const [currentWorker,setCurrentWorker]=useState({})

  const findWorker= setCurrentWorker(currentWorker)

  const updateCurrentWorker = ()=>{
  

}
  
  return (

    <div className="App">
      <div className='topContainer'>
        <Homepage />
        <EmployeePage mvp={currentWorker} searchEmp={findWorker} />
        
      </div>
    </div>
  );
}

export default App;
