import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/moviesApi';
import { H1 } from './Home.styled';
import { MovieList } from 'components/MovieList/MovieList';


const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(setMovies)
  }, []);

  return (
    
    movies && (
      <>
        <H1>Trending today</H1>
        <MovieList movies={movies} />
      </>
    )
  );
};

export default Home;
