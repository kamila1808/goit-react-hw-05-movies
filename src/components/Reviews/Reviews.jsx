import { useFetchMovieReviews } from 'hooks/useFetchMovie';
import { List, Wrapper } from './Reviews.styled';

export const Reviews = () => {
  const reviews = useFetchMovieReviews();

  return (
    <>
      {reviews.length === 0 ? (
        'There are no any reviews for this movie yet'
      ) : (
        <List>
          {reviews.map(({ id, author, content }) => {
            return (
              <>
              <Wrapper>
                <li key={id}>
                  <p><strong>Author:</strong> {author}</p>
                </li>
                <li>
                  <p>{content}</p>
                </li>
                </Wrapper>
              </>
            );
          })}
        </List>
      )}
    </>
  );
};
