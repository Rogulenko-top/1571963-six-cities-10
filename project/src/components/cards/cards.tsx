import { Offer } from '../../types/offer';

type CardsProps = {
  offer: Offer;
  onMouseOver: () => void;
}

function Cards({ offer, onMouseOver }: CardsProps): JSX.Element {
  const { isPremium, isFavorite, previewImage, price, rating, type, title } = offer;
  const ratingPercent = 100 / 5 * rating;
  const formattedType = type[0].toUpperCase() + type.slice(1);
  return (
    <article className="cities__card place-card" onMouseOver={onMouseOver}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={type} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingPercent}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{title}</a>
        </h2>
        <p className="place-card__type">{formattedType}</p>
      </div>
    </article>
  );
}

export default Cards;
