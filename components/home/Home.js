import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ movies }) => {
  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} className="movie-image" />

            {/* Watch Trailer button */}
            <Link to={`/Trailer/${movie.trailerUrl}`} className="trailer-button">
              Watch Trailer
            </Link>

            {/* Review button below the Watch Trailer button */}
            <Link to={`/Reviews/${movie.id}`} className="review-button">
              Review
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
