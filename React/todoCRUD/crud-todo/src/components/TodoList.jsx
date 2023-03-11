import React from 'react'
import Todo from './Todo'
function TodoList(props) {
  
  return (
    <div>
      
      {console.log(props.todos)}
      <Todo info={props.todos}/>
    
    </div>
  )
}

export default TodoList
