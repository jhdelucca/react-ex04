import React from "react";
import { Route } from "react-router-dom";
import { MoviesList } from "./components/MoviesList";
import { MovieDetail } from "./components/MovieDetail";

export const ApplicationRoutes = () => (
    <>
      <Route path="/" exact component={MoviesList} />
      <Route path="/movie/:movieId" exact component={MovieDetail}  />
    </>
  );