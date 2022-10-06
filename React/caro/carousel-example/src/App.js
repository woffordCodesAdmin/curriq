import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import "./styling.css";
import cardImages from "./models/cardImgs";
import symbols from "./models/symbols";

function App() {
  const [count, setCount] = useState(0);

  const [currentPic,setCurrentPic] = useState(cardImages[count])

  
  console.log(currentPic)

  const reverseCount = () => {
    console.log('pinged!')
    setCount(count -1);
    setCurrentPic(cardImages[count])
  };
  const changeCount = () => {
    console.log('pinged!')
    setCount(count +1);
    setCurrentPic(cardImages[count])
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
