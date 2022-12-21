import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/moviesApi';
import { H1 } from './Home.styled';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    movies && (
      <>
        <H1>Trending today</H1>
        <MovieList movies={movies} />
        <Outlet />
      </>
    )
  );
};
