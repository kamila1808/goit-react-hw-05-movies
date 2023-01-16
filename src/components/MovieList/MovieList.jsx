import { List, H2, ListItem, A, Img } from './MovieList.styled';
import imageNotFound from '../../images/image-not-found.webp';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ title, id, poster_path }) => (
        <ListItem key={id}>
          <A to={`/movies/${id}`} state={{from:location}}>
            <Img
              src={
                poster_path === null
                  ? imageNotFound
                  : `https://image.tmdb.org/t/p/w500${poster_path}`
              }
              alt={title}

            />
            <H2>{title}</H2>
          </A>
        </ListItem>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
      poster_path: PropTypes.string,
    })
  )
}