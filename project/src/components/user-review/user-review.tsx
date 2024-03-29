import { Fragment } from 'react';
import { Review } from '../../types/review';
import { getCountStars, getFormatDate } from '../../utils/utils';

type UserReviewProps = {
  reviews: Review[];
}

function UserReview({ reviews }: UserReviewProps): JSX.Element {
  return (
    <Fragment>
      {reviews.map((review) => {
        const countStars = getCountStars(review.rating);
        const date = getFormatDate(review.date);
        return (
          < li
            key={review.id}
            className="reviews__item"
          >
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  src={review.user.avatarUrl}
                  className="reviews__avatar user__avatar"
                  width="54"
                  height="54"
                  alt="Reviews avatar"
                />
              </div>

              <span className="reviews__user-name">
                {review.user.name}
              </span>

            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span
                    style={{ width: countStars }}
                  />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {review.comment}
              </p>
              <time className="reviews__time" dateTime={review.date}>{date}</time>
            </div>
          </li >
        );
      }
      )}
    </Fragment>
  );
}

export default UserReview;
