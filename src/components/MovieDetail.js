import React, { useState, useEffect } from "react";
import MoviesServices from "../services/MoviesService"
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../action/favoriteActions";

export const MovieDetail = (props) => {

  const [movie, setMovie] = useState({ data: {} });

  const movieLocate = 'https://image.tmdb.org/t/p/w500/';

  const dispatch = useDispatch();
  const favorito = useSelector(state => state.favorite);

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

      <button
        onClick={() => dispatch(setFavorite(!favorito.fav))}
        style={{ backgroundColor: favorito.fav ? "green" : "red" }}
      >
        Favoritar
      </button>
    </>
  )
};