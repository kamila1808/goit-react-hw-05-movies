import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/moviesApi';

export const useFetchMovie = () => {
  const [movies, setMovies] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesById(movieId).then(setMovies);
  }, [movieId]);

  return movies;
};
