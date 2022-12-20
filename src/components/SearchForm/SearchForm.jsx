import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/moviesApi';

export const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('moviename');

  useEffect(() => {
    async function fetchMovie() {
      const data = await fetchMoviesByName(query);
      setMovies(data);
    }
    fetchMovie();
  }, [query]);

  const handleSubmit = (data, event) => {
    event.preventDefault();
    setSearchParams({moviename: data.searchString});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="moviename" />
        <button type="submit">Search</button>
      </form>
      {/* <ul>
          {movies.map(({ title, id, poster_path }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  width="300"
                  height="400"
                />
                <h2>{title}</h2>
              </Link>
            </li>
          ))}
        </ul> */}
    </>
  );
};
