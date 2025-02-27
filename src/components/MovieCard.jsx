import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-box">
      <Link to={`${movie.imdbId}`}>
        <img src={movie.poster} alt={movie.title} />
      </Link>
    </div>
  );
}
