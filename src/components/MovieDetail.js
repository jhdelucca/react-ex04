import React, { useState, useEffect } from "react";
import MoviesServices from "../services/MoviesService"


export const MovieDetail = (props) => {

  const [movie, setMovie] = useState({ data: {} });

  const movieLocate = 'https://image.tmdb.org/t/p/w500/';



  const requestMovies = async () => {
    const moviesResults = await MoviesServices.getMovieId(props.match.params.movieId);
    setMovie(moviesResults);
  }

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <>
      <h1>{movie.data.title}</h1>

      <img src={`${movieLocate}/${movie.data.backdrop_path}`} alt="capa" /> <br></br>

      <a target="_blank" href={movie.data.homepage}>Acesse a pagina do filme</a> <br></br>

      <p>{movie.data.overview}</p><br></br>


    </>
  )
};