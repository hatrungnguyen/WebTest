import React, { useState, useEffect } from 'react';
import './Reviews.css';
import { Link, useParams } from 'react-router-dom';

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const [newReview, setNewReview] = useState('');
  const { movieId } = useParams();

  // Fetch the correct movie data when movieId changes
  useEffect(() => {
    if (movieId) {
      getMovieData(movieId); // Call the function to get movie details based on movieId
    }
  }, [movieId, getMovieData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview) {
      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);
      movie.reviews = updatedReviews; // Sync reviews with movie data
      setNewReview('');
    }
  };

  return (
    <div className="review-section">
      <div className="movie-details">
        {movie && <img src={movie.image} alt={movie.title} />}
        <h2>{movie && movie.title}</h2>
      </div>

      <div className="reviews-section">
        <h3>Reviews</h3>
        <ul>
          {reviews.length > 0 ? (
            reviews.map((review, index) => <li key={index}>{review}</li>)
          ) : (
            <p>No reviews available yet. Be the first to add one!</p>
          )}
        </ul>

        <form onSubmit={handleSubmit} className="review-form">
          <input
            type="text"
            placeholder="Add your review"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        {movie && movie.trailerUrl && (
          <Link to={`/Trailer/${movie.trailerUrl}`} className="trailer-button">
            Watch Trailer
          </Link>
        )}
      </div>
    </div>
  );
};

export default Reviews;
