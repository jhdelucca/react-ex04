import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

export const MovieFavorites = () => {
    const favorito = useSelector(state => state.favorite);
    
    return (
        <>
        <h1>Lista Filmes Favs</h1>
        <ul>
          {favorito.listaFav.map(movie => (
            <li>
              <Link to={`movie/${movie.id}`} >{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
      )
}