import "./App.css";
import React, { useReducer } from "react";
// 1.

// 3.
const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYERATTACK":
      return { playerHull: state.playerHull, alienHull: state.alienHull - 10 };

    case "ALIENATTACK":
      return { playerHull: state.playerHull - 10, alienHull: state.alienHull };

    default:
      return state;
  }
};

function App() {
  // 2.
  const [state, dispatch] = useReducer(reducer, {
    playerHull: 100,
    alienHull: 100,
  });
  return (
    <div className="App">
      <h1>SpaceBattle</h1>
      <hr />
      <h2> Player One {state.playerHull}</h2>

      <h2> Alien One {state.alienHull}</h2>

      <button
        onClick={() => {
          dispatch({ type: "PLAYERATTACK" });
        }}
      >
        {" "}
        P1 Fire
      </button>
      <button
        onClick={() => {
          dispatch({ type: "ALIENATTACK" });
        }}
      >
        {" "}
        P2 Fire
      </button>
    </div>
  );
}

export default App;
