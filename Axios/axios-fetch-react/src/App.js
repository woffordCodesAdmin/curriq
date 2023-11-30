import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import PlayerCard from "./components/PlayerCard";
// ----------------------------[Lib that Fetches Data]
function App() {
  const getInfo = async () => {
    const response = await axios.get(
      "https://nba-stats-db.herokuapp.com/api/playerdata/season/2023"
    );
    let dataset = response.data;
    console.log(dataset);
    setPlayers(dataset.results);
  };

  useEffect(() => {
    getInfo();

  }, []);

  const [players, setPlayers] = useState([]);
  return (
    <div className="App">
      <div className="cardDeck">
      {players.map((baller,i) => {
        return <PlayerCard key={i} info={baller}/>
      })}
      </div>
      
    </div>
  );
}

export default App;
