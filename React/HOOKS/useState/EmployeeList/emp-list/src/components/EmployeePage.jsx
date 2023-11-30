import React from 'react'
import Header from './Header'

function EmployeePage(props) {
  return (
    <div className='empAge'>
        <Header />
      <h1>Employee Page</h1>
      {props.mvp}

    </div>
  )
}

export default EmployeePage
