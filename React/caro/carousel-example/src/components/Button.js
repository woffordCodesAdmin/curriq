import React from 'react'

function Button(props) {
  return (
      <>
        <button onClick={props.togglePic}>{props.symbols}</button>
      </>
  )
}

export default Button

