import { useFetchMovieReviews } from 'hooks/useFetchMovie';
import { List, ListItem } from './Reviews.styled';
import PropTypes from 'prop-types';


 const Reviews = () => {
  const reviews = useFetchMovieReviews();

  return (
    <>
      {reviews.length === 0 ? (
        'There are no any reviews for this movie yet'
      ) : (
        <List>
          {reviews.map(({ id, author, content }) => {
            return (
                <ListItem key={id}>
                  <p><strong>Author:</strong> {author}</p>
                  <p>{content}</p>
                </ListItem>
               );
          })}
        </List>
      )}
    </>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  )
}