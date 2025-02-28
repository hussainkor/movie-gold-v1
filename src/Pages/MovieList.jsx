import React from "react";
import MovieCard from "../components/MovieCard";
import { useContext } from "react";
import { context } from "../context";

export default function MovieList() {
  const { movies } = useContext(context);
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
}
