import React, { useState, useEffect } from "react";
import moviesData from "./api/movies.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Trailer from "./components/Trailer";
import MovieList from "./Pages/MovieList";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  const [movies, setMovies] = useState(moviesData);

  useEffect(() => {}, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/trailer/:ytTrailerId" element={<Trailer />} />
          <Route path="movies">
            <Route index element={<MovieList movies={movies} />} />
            <Route
              path=":id"
              element={<MovieDetails movies={movies} setMovies={setMovies} />}
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
