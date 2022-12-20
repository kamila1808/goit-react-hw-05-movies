import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/moviesApi';
import { List, H2, ListItem, A } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    movies && (
      <>
        <h1>Trending today</h1>
        <List>
          {movies.map(({ title, id, poster_path }) => (
            <ListItem key={id}>
              <A to={`/movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  width="300"
                  height="400"
                />
                <H2>{title}</H2>
              </A>
            </ListItem>
          ))}
        </List>
        <Outlet />
      </>
    )
  );
};
