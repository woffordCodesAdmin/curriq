import "./App.css";
import "./style.css";

import Header from "./components/Header";
import Player from "./components/Player";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <Header />

      <Board />

      <div className="manara"><Player  score="100" whichPlayer="X" /></div>

<div className="jordan">
  <Player  score="50" whichPlayer="O" />
  
  </div>
    </div>
  );
}

export default App;
