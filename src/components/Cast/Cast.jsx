import { useFetchMovieCast } from 'hooks/useFetchMovie';

export const Cast = () => {
const credits = useFetchMovieCast();

  return (
    <>
      <ul>
        {credits &&
          credits.map(({ id, name, profile_path, character }) => (
            <>
              <li key={id}>
                <p>{name}</p>
              </li>
              <li> <img
                  src={
                    profile_path === null
                      ? 'Image not found'
                      : `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt={name}
                  width="200"
                  height="300"
                /></li>
              <li>
                <p>{character}</p>
              </li>
            </>
          ))}
      </ul>
    </>
  );
};
