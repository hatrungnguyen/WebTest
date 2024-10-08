import './App.css';
import { useState, useEffect } from 'react';
import Layout from './components/Layout.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import Header from './components/header/Header.js';
import Trailer from './components/trailer/Trailer.js';
import Reviews from './components/reviews/Reviews.js';
import NotFound from './components/notFound/NotFound.js';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      image: "/movies/inception.png",
      trailerUrl: "5EiV_HXIIGs", // YouTube Video ID
      reviews: []
    },
    {
      id: 2,
      title: "Interstellar",
      image: "/movies/interstellar.png",
      trailerUrl: "zSWdZVtXT7E", // YouTube Video ID
      reviews: []
    }
  ]);

  const [movie, setMovie] = useState(null); // Holds selected movie details
  const [reviews, setReviews] = useState([]); // Holds reviews for the selected movie

  const getMovieData = (movieId) => {
    const selectedMovie = movies.find((movie) => movie.id === parseInt(movieId));
    if (selectedMovie) {
      setMovie(selectedMovie);
      setReviews(selectedMovie.reviews);
    }
  };

  // Fetch movies only once on load
  useEffect(() => {
    setMovies(movies);
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route
            path="/Reviews/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
