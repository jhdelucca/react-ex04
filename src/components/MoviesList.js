import React, { useState, useEffect } from "react";
import MoviesServices from "../services/MoviesService"
import { Link } from "react-router-dom";


export const MoviesList = () => {
  const [movies, setMovies] = useState({ data: { results: [] } });



  const requestMovies = async () => {
    const moviesResults = await MoviesServices.getPopularMovies();
    setMovies(moviesResults);
  }

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <>
      <h1>Lista Filmes</h1>
      <ul>
        {movies.data.results.map(movie => (
          <li>
            <Link to={`movie/${movie.id}`} >{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
};
