import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/moviesApi';
import { fetchMoviesByReviews } from 'services/moviesApi';
import { fetchMoviesByCast } from 'services/moviesApi';

export const useFetchMovieId = () => {
  const [movies, setMovies] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesById(movieId).then(setMovies);
  }, [movieId]);

  return movies;
};

export const useFetchMovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchMoviesByCast(movieId).then(setCredits)
  }, [movieId])

  return credits;
}

export const useFetchMovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesByReviews(movieId).then(setReviews)
  }, [movieId])

  return reviews;
}


