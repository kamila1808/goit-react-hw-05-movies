import { useFetchMovieCast } from 'hooks/useFetchMovie';
import { List, ListItem } from './Cast.styled';

export const Cast = () => {
  const credits = useFetchMovieCast();

  return (
    <>
      <List>
        {credits &&
          credits.map(({ id, name, profile_path, character }) => (
            <>
              <ListItem>
                <img
                  src={
                    profile_path === null
                      ? 'Image not found'
                      : `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt={name}
                  width="150"
                  height="230"
                />
              </ListItem>
              <ListItem key={id}>
                <p>
                  {name}: {character}
                </p>
              </ListItem>
            </>
          ))}
      </List>
    </>
  );
};
