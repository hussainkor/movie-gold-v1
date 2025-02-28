import { createContext, useEffect, useState } from "react";
import moviesData from "./api/movies.json";

export const context = createContext();
//export const moviesContext = createContext();

const ContextProvider = (props) => {
  const [count, setCount] = useState(10);
  const [movies, setMovies] = useState(moviesData);

  useEffect(() => {}, []);

  return (
    <>
      <context.Provider value={{ count, movies, setMovies }}>
        {props.children}
      </context.Provider>
    </>
  );
};
export default ContextProvider;
