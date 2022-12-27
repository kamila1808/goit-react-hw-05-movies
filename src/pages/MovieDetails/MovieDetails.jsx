import { useFetchMovieId } from 'hooks/useFetchMovie';
import { useNavigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {
  Wrapper,
  List,
  DescriptionWrapper,
  ListItem,
  A,
  AddInfoWrapper,
  AddInfoTitle,
  Button
} from './MovieDetails.styled';

const MovieDetails = () => {
  const movie = useFetchMovieId();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    movie && (
      <>
        <Button
          onClick={() => {
            navigate(location?.state?.from ?? '/');
          }}
        >
          Go Back
        </Button>
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
                    <A to="cast" state={location.state}>Cast</A>
                  </ListItem>
                  <ListItem>
                    <A to="reviews" state={location.state}>Reviews</A>
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

export default MovieDetails;
