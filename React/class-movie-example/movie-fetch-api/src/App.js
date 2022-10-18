import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import "./style.css";

function App() {
  const apiKey = "f5068e78";
  const [movie, setMovie] = useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie("Scarface");
  }, []);

  return (
    <div className="App">
      
      <MovieDisplay movie={movie} />
      <Form moviesearch={getMovie} />
    </div>
  );
}

export default App;
