import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import listOfTodos from './components/models/listTodo';

function App() {
  return (
    <div className="App">
      <TodoList todos={listOfTodos}/> 
    </div>
  );
}

export default App;
