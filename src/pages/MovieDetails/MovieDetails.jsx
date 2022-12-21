import { useFetchMovie } from 'hooks/useFetchMovie';


export const MovieDetails = () => {
  const movie = useFetchMovie();

  return (
    movie && (
      <>
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </>
    )
  );
};
