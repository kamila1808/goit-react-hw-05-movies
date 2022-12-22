import { useFetchMovieId } from 'hooks/useFetchMovie';
import { NavLink, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const movie = useFetchMovieId();

  return (
    movie && (
      <>
        <ul>
          <li>
            <h2>{movie.title}</h2>
          </li>
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
          <li>
            <p>User score: {Math.floor(movie.vote_average * 10)}%</p>
          </li>
          <li>
            <p>Overview: {movie.overview}</p>
          </li>
          <li>
            <p>
              Genres:{' '}
              {movie.genres
                ? movie.genres.map(genre => genre.name).join(', ')
                : 'No information'}
            </p>
          </li>
        </ul>
        <h3>Additional Information</h3>

        <nav>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    )
  );
};
