import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Trailer from "./components/Trailer";
import MovieList from "./Pages/MovieList";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    // basename="/portfolio/gold-movie"
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/trailer/:ytTrailerId" element={<Trailer />} />
          <Route path="movies">
            <Route index element={<MovieList />} />
            <Route path=":id" element={<MovieDetails />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
