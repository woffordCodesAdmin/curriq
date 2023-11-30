import "./App.css";
import receipts from "./models/receipts";
import Receipt from "./components/Receipt";
import "./style.css";
const state = {
  receipts
};
function App() {
  return (
    <div className="App">
      <h1>Korrilla Receipt</h1>
      <div className="flexer">
        <Receipt receipt={state.receipts[0]} />
        
        <Receipt receipt={state.receipts[1]} />
        
        <Receipt receipt={state.receipts[2]} />
      </div>
    </div>
  );
}

export default App;
