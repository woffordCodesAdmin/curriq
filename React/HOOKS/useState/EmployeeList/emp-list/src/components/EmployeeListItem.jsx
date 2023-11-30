import React from 'react'

function EmployeeListItem(props) {
  return (
    <div className='item'>
      <div>{props.name}</div>
       <div>{props.pos}</div> 
    </div>
  )
}

export default EmployeeListItem
