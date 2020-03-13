import React from "react";
import { Route } from "react-router-dom";
import { MoviesList } from "./components/MoviesList";
import { MovieDetail } from "./components/MovieDetail";
import { MovieFavorites } from "./components/movieFavorites";

export const ApplicationRoutes = () => (
    <>
      <Route path="/" exact component={MoviesList} />
      <Route path="/movie/:movieId" exact component={MovieDetail}  />
      <Route path ="/favorites" exact component = {MovieFavorites} />
    </>
  );