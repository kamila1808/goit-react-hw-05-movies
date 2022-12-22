import { useFetchMovieReviews } from 'hooks/useFetchMovie';

export const Reviews = () => {
  const reviews = useFetchMovieReviews();

  return (
    <>
      {reviews.length === 0 ? (
        'There are no any reviews for this movie yet'
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <>
                <li key={id}>
                  <p>Author: {author}</p>
                </li>
                <li>
                  <p>{content}</p>
                </li>
              </>
            );
          })}
        </ul>
      )}
    </>
  );
};
