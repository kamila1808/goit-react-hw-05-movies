import { useFetchMovie } from 'hooks/useFetchMovie';

export const MovieDetails = () => {
  const movie = useFetchMovie();

  return (
    movie && (
      <>
        <h2>{movie.title}</h2>
      </>
    )
  );
};
