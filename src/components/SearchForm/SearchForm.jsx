import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/moviesApi';
import { MovieList } from 'components/MovieList/MovieList';
import { Form, Input, Button } from './SearchForm.styled';
// import Notiflix from 'notiflix';

export const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('moviename');
 

  useEffect(() => {
    if (query === null || query === '') return;
  
    async function fetchMovie() {
      const data = await fetchMoviesByName(query);
      setMovies(data);
    }
    fetchMovie();
  }, [query]);


  const handleSubmit = (data, event) => {
    event.preventDefault();
    setSearchParams({ moviename: data.searchString });
    data.reset();
  };


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="moviename" placeholder='Enter movie title'/>
        <Button type="submit">Search</Button>
      </Form>
      <MovieList movies={movies} />
    </>
  );
};
