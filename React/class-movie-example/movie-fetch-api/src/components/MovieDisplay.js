import React from "react";

function MovieDisplay({ movie }) {

const loaded=()=>{

  return (
    <>
      <div className="container">
        <h1 className="title">{movie.Title}</h1>
        <h4>{movie.Year}</h4>
        <h4>Rated : {movie.Rated}</h4>
        <h4>{movie.Genre}</h4>
      </div>

      <div className="scrn">

      <img className="poster" src={movie.Poster} alt={movie.Title} />
      <h2 className="synopsis">{movie.Plot} </h2>

      </div>
      <h2>{movie.Actors}</h2>
   
      <h2 style={{color:"green"}}>Sold: ${movie.BoxOffice}</h2>
     
    </>
  );
}

const loading=()=>{
  return "Movie Not available"
}


return movie ? loaded() : loading

}

export default MovieDisplay;
