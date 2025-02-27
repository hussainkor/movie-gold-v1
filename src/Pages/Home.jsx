import React from "react";
import Hero from "../components/Hero";

export default function Home({ movies }) {
  return (
    <div className="App">
      <Hero movies={movies} />
    </div>
  );
}
