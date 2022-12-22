import { useFetchMovieId } from 'hooks/useFetchMovie';
import { Outlet } from 'react-router-dom';
import { Wrapper, List, DescriptionWrapper, ListItem, A, AddInfoWrapper, AddInfoTitle } from './MovieDetails.styled';

export const MovieDetails = () => {
  const movie = useFetchMovieId();

  return (
    movie && (
      <>
        <Wrapper>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="300"
            height="400"
          />
          <DescriptionWrapper>
            <h2>{movie.title}</h2>
            <p>
              <strong>User score:</strong> {Math.floor(movie.vote_average * 10)}
              %
            </p>
            <p>
              <strong>Overview:</strong> {movie.overview}
            </p>
            <p>
              <strong>Genres: </strong>
              {movie.genres
                ? movie.genres.map(genre => genre.name).join(', ')
                : 'No information'}
            </p>
            <AddInfoWrapper>
            <AddInfoTitle>Additional Information</AddInfoTitle>
            <nav>
              <List>
                <ListItem>
                  <A to="cast">Cast</A>
                </ListItem>
                <ListItem>
                  <A to="reviews">Reviews</A>
                </ListItem>
              </List>
            </nav>
            <Outlet />
            </AddInfoWrapper>
          </DescriptionWrapper>
        </Wrapper>
      </>
    )
  );
};
