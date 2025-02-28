import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { useContext } from "react";
import { context } from "../context";

export default function MovieDetails() {
  const [userReview, setUserReview] = useState("");
  const [rate, setRate] = useState();
  const [rating, setRating] = useState();

  const { movies, setMovies } = useContext(context);
  const { id } = useParams();
  const navigate = useNavigate();

  const details = movies.find((movie) => movie.imdbId === id);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!userReview || !rating) return;
    const userRating = {
      rate: rating,
      review: userReview,
    };
    setMovies((moves) =>
      moves.map((movie) =>
        movie.imdbId === id
          ? { ...movie, reviewIds: [...movie.reviewIds, userRating] }
          : movie
      )
    );
    setRating();
    setRate();
    setUserReview("");
  };

  const totalRating =
    details.reviewIds.length > 0
      ? details.reviewIds.reduce((c, d) => c + d.rate, 0) /
        details.reviewIds.length
      : "0";

  useEffect(() => {}, []);

  return (
    <div className="movie-data">
      <div className="manage-box">
        <img
          src={details.poster}
          alt={details.title}
          className="movie-poster"
        />
        <div>
          <h5>Overall Rating</h5>
          <div className="rating-count">
            <span className="clr-white">
              <TiStarFullOutline size={16} className={`rate-active star`} />
              {totalRating}
            </span>
            <span className="clr-grey">/10</span>
          </div>
          <h2>{details.title}</h2>
          <ul>
            {details.genres.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <button
            onClick={() =>
              navigate(
                `/trailer/${details.trailerLink.slice(
                  details.trailerLink.length - 11
                )}`
              )
            }
          >
            Watch Trailer
          </button>
        </div>
      </div>
      <div className="movie-review">
        <h3>{details.reviewIds.length} Reviews</h3>
        <form onSubmit={handleAddReview}>
          <textarea
            placeholder="Enter review"
            onChange={(e) => setUserReview(e.target.value)}
            value={userReview}
            required
          />
          <p>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <TiStarFullOutline
                key={num}
                size={20}
                className={`rate ${rating >= num && "rate-active"}`}
                onMouseEnter={() => setRating(num)}
                onMouseLeave={() => setRating(rate)}
                onClick={() => setRate(num)}
              />
            ))}
          </p>
          <button>Add</button>
        </form>
        {details.reviewIds.map((review, i) => (
          <div key={i} className="review-box">
            <span>
              <TiStarFullOutline size={16} className={`rate-active star`} />
              {review.rate}/10
            </span>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
