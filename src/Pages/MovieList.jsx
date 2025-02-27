import React from "react";
import MovieCard from "../components/MovieCard";

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
}
