import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState(" Default Name");
  
  useEffect(() => {
    console.log("CurrentName:", name)
  });
  return (
    <div className="App">
      <h1>Greetings {name}</h1>
      <button
        onClick={() => {
          let newName = prompt("What is your Name ? ");
          setName(newName)
        }}
      >
        Enter Name
      </button>
    </div>
  );
}

export default App;
