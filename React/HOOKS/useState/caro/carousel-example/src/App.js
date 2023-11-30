import "./App.css";
import { useState } from "react";
// ----------------------------------------------- {Step 1: Declare the useState Hook}
import Button from "./components/Button";
import Card from "./components/Card";
import "./styling.css";
import cardImages from "./models/cardImgs";
import symbols from "./models/symbols";

function App() {
  const [count, setCount] = useState(0);
  // ---------------------------------------------{Step 2: Declare the INITIAL VARIABLE and the name of the function to change it}

  const [currentPic,setCurrentPic] = useState(cardImages[count])  
  console.log(currentPic)
// -----------------------------------------------------------{Step 3: The Functions that change the state }
  const reverseCount = () => {
    setCount(count -1);
    setCurrentPic(cardImages[count])
    console.log("count:", count)
  };


  const changeCount = () => {
    setCount(count +1);
    setCurrentPic(cardImages[count])
    console.log("count:", count)
  };

  return (
    <div className="App">
      <Card currentCount={count} images={cardImages[count]} />
      <hr />
      <Button  togglePic={reverseCount} symbols={symbols.left} />

      <Button  togglePic={changeCount} symbols={symbols.right} />
    </div>
  );
}

export default App;
