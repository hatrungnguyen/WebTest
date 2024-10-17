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
      image: "/movies/inception.jpg",
      trailerUrl: "5EiV_HXIIGs",
      reviews: []
    },
    {
      id: 2,
      title: "Interstellar",
      image: "/movies/interstellar.png",
      trailerUrl: "zSWdZVtXT7E",
      reviews: []
    },
    {
      id: 3,
      title: "Arcane",
      image: "/movies/arcane.jpg",
      trailerUrl: "Sl-xmZTH6GE",
      reviews: []
    },
    {
      id: 4,
      title: "50 First Dates",
      image: "/movies/50firstdates.jpg",
      trailerUrl: "17KJk3ErIx0",
      reviews: []
    },
    {
      id: 5,
      title: "Grown Ups",
      image: "/movies/grownups.jpg",
      trailerUrl: "e01NVCveGkg",
      reviews: []
    },
    {
      id: 6,
      title: "Grown Ups 2",
      image: "/movies/grownups2.jpg",
      trailerUrl: "Sq5CIH0duMk",
      reviews: []
    },
    {
      id: 7,
      title: "Avengers: Endgame",
      image: "/movies/endgame.jpg",
      trailerUrl: "TcMBFSGVi1c",
      reviews: []
    },
    {
      id: 8,
      title: "Avengers: Infinity War",
      image: "/movies/infinitywar.jpg",
      trailerUrl: "6ZfuNTqbHE8",
      reviews: []
    },
    {
      id: 9,
      title: "Thor: Love And Thunder",
      image: "/movies/thorl&t.jpg",
      trailerUrl: "Go8nTmfrQd8",
      reviews: []
    },
    {
      id: 10,
      title: "Spider-man: Beyond The Spider Verse",
      image: "/movies/spiderman_bysv.jpg",
      trailerUrl: "tnQ7S1BxkYo",
      reviews: []
    },{
      id: 11,
      title: "Spider-man: Far From Home",
      image: "/movies/spiderman_ffh.jpg",
      trailerUrl: "Nt9L1jCKGnE",
      reviews: []
    },{
      id: 12,
      title: "Spider-man: No Way Home",
      image: "/movies/spiderman_nwh.png",
      trailerUrl: "JfVOs4VSpmA",
      reviews: []
    },{
      id: 13,
      title: "Spider-man: Across The Spider-Verse",
      image: "/movies/spiderman_atsv.jpg",
      trailerUrl: "cqGjhVJWtEg",
      reviews: []
    },{
      id: 14,
      title: "Ironman 3",
      image: "/movies/ironman3.jpg",
      trailerUrl: "Ke1Y3P9D0Bc",
      reviews: []
    },
    {
      id: 15,
      title: "Fifty Shades Of Grey",
      image: "/movies/50ShadesOfName.jpg",
      trailerUrl: "SfZWFDs0LxA",
      reviews: []
    }
  ]);

  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  const getMovieData = (movieId) => {
    const selectedMovie = movies.find((movie) => movie.id === parseInt(movieId));
    if (selectedMovie) {
      setMovie(selectedMovie);
      setReviews(selectedMovie.reviews);
    }
  };

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
