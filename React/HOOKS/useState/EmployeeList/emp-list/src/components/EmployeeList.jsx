import React from 'react'
import EmployeeListItem from './EmployeeListItem'
import workers from '../models/workers' 


function EmployeeList() {
  return (
    <div className="lister">
      {/* <h1>Employee List</h1> */}
      <EmployeeListItem name={workers.james.name} pos={workers.james.pos}/>
      <EmployeeListItem name={workers.julie.name} pos={workers.julie.pos}/>
      <EmployeeListItem name={workers.eugene.name} pos={workers.eugene.pos}/>
      <EmployeeListItem name={workers.john.name} pos={workers.john.pos}/>
      <EmployeeListItem name={workers.ray.name} pos={workers.ray.pos}/>
      <EmployeeListItem name={workers.paul.name} pos={workers.paul.pos}/>
    </div>
  )
}

export default EmployeeList
