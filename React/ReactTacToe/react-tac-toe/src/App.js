// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import './styles.css'
function App() {
  return (
    <div className="App">
     <Header />

    <div className="flexer">
    <Player whichPlayer='X'/>
     
     <Player whichPlayer='O'/>

    </div>
     



     <Board />
    </div>
  );
}

// header
// player
// board
export default App;
