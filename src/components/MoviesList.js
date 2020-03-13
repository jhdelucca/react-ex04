import React, { useState, useEffect } from "react";
import MoviesServices from "../services/MoviesService"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { incrementFavorite, deleteFavorities } from "../action/favoriteActions";
import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline, IoIosInformationCircleOutline } from "react-icons/io";


export const MoviesList = () => {
  const [movies, setMovies] = useState({ data: { results: [] } });

  const dispatch = useDispatch();
  const favorito = useSelector(state => state.favorite);

  /**const list1 = ["1","2","3","4","5"]
  const teste = list1.filter(function(val) {
    return val != "3" && val != "2";
  })
  console.log("t " + teste)
  console.log("T1 " + list1);**/
  
  
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
      <h2><Link to={'/favorites'}>Favs</Link> - {favorito.listFav.length}</h2>
      <ul>
        {movies.data.results.map(movie => (
          <li>
            <Link to={`movie/${movie.id}`} >{movie.title}</Link>
            
            <button
              onClick={() => dispatch(incrementFavorite(movie))}
              style={{ marginLeft:"30px"}}>
              <IoIosCheckmarkCircleOutline />
            </button>
            <button 
              onClick={() => dispatch(deleteFavorities(movie))}
              style={{ marginLeft:"30px"}}>
              <IoIosCloseCircleOutline />
            </button>
          </li>
        ))}
      </ul>
    </>
  )
};
