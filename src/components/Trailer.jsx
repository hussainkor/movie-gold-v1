import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

export default function Trailer() {
  const params = useParams();
  const key = params.ytTrailerId;

  return (
    <div className="react-player-container">
      {key !== null ? (
        <ReactPlayer
          controls="true"
          playing={true}
          url={`https://www.youtube.com/watch?v=${key}`}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
}
