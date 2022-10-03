import React from "react";
import Square from "./Square";



function Board(props) {
  return (
    <div className="board">
      <br/>
      <br/>
      <br/>
      <div className="row">
        <Square whichPlayer={props.whichPlayer} />
        <Square whichPlayer={props.whichPlayer} />
        <Square whichPlayer={props.whichPlayer} />
      </div>
      <div className="row">
        <Square whichPlayer={props.whichPlayer} />
        <Square whichPlayer={props.whichPlayer} />
        <Square whichPlayer={props.whichPlayer} />
      </div>
      <div className="row">
        <Square whichPlayer={props.whichPlayer} />
        <Square whichPlayer={props.whichPlayer} />
        <Square whichPlayer={props.whichPlayer} />
      </div>

      
    </div>
  );
}

export default Board;
