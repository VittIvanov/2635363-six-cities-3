import React, { useState } from 'react';
import { ReviewFormProps } from '../../types/types';
import { useAppDispatch } from '../../store/store-hooks';
import { fetchReviews, postReview } from '../../store/reviewsSlice';
import { useAppSelector } from '../../store/store-hooks';

const ratingTitles: Record<number, string> = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
};

const ReviewForm: React.FC<ReviewFormProps> = ({ offerId }) => {
  const dispatch = useAppDispatch();
  const { isLoading, hasError } = useAppSelector((state) => state.reviews);
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  const isFormValid = rating !== null && comment.length >= 50;

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!isFormValid) {
      return;
    }

    try {
      await dispatch(postReview({ offerId, comment, rating })).unwrap();

      setRating(null);
      setComment('');
      dispatch(fetchReviews(offerId));
    } catch (_error) {
      // Ошибка обрабатывается через hasError в Redux
    }
  };

  return (
    <form
      className="reviews__form form"
      onSubmit={(evt) => void handleSubmit(evt)}
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <React.Fragment key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              checked={rating === star}
              onChange={() => setRating(star)}
            />
            <label
              htmlFor={`${star}-stars`}
              className="reviews__rating-label form__rating-label"
              title={ratingTitles[star]}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid || isLoading}
        >
          Submit
        </button>

        {hasError && (
          <p style={{ color: 'red', marginTop: 5 }}>
            Не удалось отправить отзыв. Попробуйте позже.
          </p>
        )}
      </div>
    </form>
  );
};

export default ReviewForm;
