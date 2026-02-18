import { ReviewListProps } from '../../types/types';
import ReviewItem from './ReviewItem';

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  const sortesdReviews = [...reviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortesdReviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}

      </ul>
    </>
  );
};

export default ReviewList;
