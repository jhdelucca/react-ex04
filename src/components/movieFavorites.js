import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

export const MovieFavorites = () => {
    const favorito = useSelector(state => state.favorite);
    console.log(favorito.listFav);
    console.log(favorito.exibirFavs);
    
    return (
        <>
        <h1>Lista Filmes Favs</h1>
        <ul>
          {favorito.listFav.map(movie => (
            <li>
              <Link to={`movie/${movie.id}`} >{movie.title}</Link>
            </li>
          ))}
        </ul>

        <Link to="/">Voltar</Link>
      </>
      )
}