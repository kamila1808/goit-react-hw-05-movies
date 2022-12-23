import { useFetchMovieCast } from 'hooks/useFetchMovie';
import { List, ListItem, P } from './Cast.styled';
import imageNotFound from '../../images/image-not-found.webp';
import PropTypes from 'prop-types';


 const Cast = () => {
  const credits = useFetchMovieCast();

  return (
    <>
      <List>
        {credits &&
          credits.map(({ id, name, profile_path, character }) => (
            <>
              <ListItem key={id}>
                <img
                  src={
                    profile_path === null
                      ? imageNotFound
                      : `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt={name}
                  width="150"
                  height="230"
                />
                <P>{name}</P>
                <P>Character: {character}</P>
              </ListItem>
            </>
          ))}
      </List>
    </>
  );
};

export default Cast;

Cast.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      profile_path: PropTypes.string,
      character: PropTypes.string,
    })
  )
}
