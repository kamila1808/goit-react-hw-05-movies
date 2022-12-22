import { List, H2, ListItem, A } from './MovieList.styled';
import imageNotFound from '../../images/image-not-found.webp';
import PropTypes from 'prop-types';


export const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ title, id, poster_path }) => (
        <ListItem key={id}>
          <A to={`/movies/${id}`}>
            <img
              src={
                poster_path === null
                  ? imageNotFound
                  : `https://image.tmdb.org/t/p/w500${poster_path}`
              }
              alt={title}
              width="300"
              height="400"
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