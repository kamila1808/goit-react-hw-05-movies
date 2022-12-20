import { useFetchMovie } from 'hooks/useFetchMovie';

export const MovieDetails = () => {
  const movie = useFetchMovie();
  console.log(movie);
  return (
    movie && (
      <>
        <h2>{movie.title}</h2>
      </>
    )
  );
};
