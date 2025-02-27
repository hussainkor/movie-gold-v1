import React, { useEffect, useState } from "react";
import { FaVideo } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";

export default function Hero({ movies }) {
  const [index, setIndex] = useState(0);
  const { title, trailerLink, poster, backdrops, reviewIds, imdbId } =
    movies[index];

  const navigate = useNavigate();

  function prevHandle() {
    setIndex(index === 0 ? movies.length - 1 : index - 1);
  }

  function nextHandle() {
    setIndex(index === movies.length - 1 ? 0 : index + 1);
  }
  const ytLink = trailerLink.slice(trailerLink.length - 11);

  const totalRating =
    reviewIds.length > 0
      ? reviewIds.reduce((c, d) => c + d.rate, 0) / reviewIds.length
      : "0";

  useEffect(() => {}, []);
  return (
    <div className="movie-carousel">
      <div
        className="bg-poster"
        style={{
          backgroundImage: `url(${backdrops[0]})`,
          backgroundSize: "cover",
        }}
      >
        <div className="card-poster">
          <div className="movie-details">
            <Link to={`movies/${imdbId}`}>
              <img src={poster} alt={title} className="movie-poster" />
            </Link>
            <h3>
              {title}
              <div>
                <h5>Overall Rating</h5>
                <div className="rating-count">
                  <span className="clr-white">
                    <TiStarFullOutline
                      size={16}
                      className={`rate-active star`}
                    />
                    {totalRating}
                  </span>
                  <span className="clr-grey">/10</span>
                </div>
              </div>
            </h3>
            <span
              className="vid-icon"
              onClick={() => navigate(`/trailer/${ytLink}`)}
            >
              <FaVideo />
            </span>
          </div>
          <button className="btn-left" onClick={prevHandle}>
            <IoIosArrowDropleftCircle size="30" />
          </button>
          <button className="btn-right" onClick={nextHandle}>
            <IoIosArrowDroprightCircle size="30" />
          </button>
          <div className="dot">
            {movies.map((_, i) => (
              <button
                onClick={() => setIndex(i)}
                className={index === i ? "current" : ""}
                key={i}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
