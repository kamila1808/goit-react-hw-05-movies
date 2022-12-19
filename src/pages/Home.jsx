import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/moviesApi';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    movies && (
      <>
      <h1>Trending today</h1>
        <ul>
          {movies.map(({ title, id, poster_path }) => (
            <li key={id}>
              <Link to={id}>{title}
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                width="300"
                height="400"
              />
              </Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </>
    )
  );
};
