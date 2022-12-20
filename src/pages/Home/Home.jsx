import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/moviesApi';
import { List, H2, ListItem, A, H1 } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    movies && (
      <>
        <H1>Trending today</H1>
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
