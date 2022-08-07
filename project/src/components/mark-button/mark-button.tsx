import { ButtonСategory, ButtonSize } from '../../const';

type MarkButtonProps = {
  buttonClass: ButtonСategory,
  isFavorite: boolean;
}

function MarkButton({ buttonClass, isFavorite }: MarkButtonProps): JSX.Element {
  const buttonSize = buttonClass === ButtonСategory.OfferCard ? ButtonSize.Small : ButtonSize.Big;

  return (
    <button
      className={`${buttonClass}__bookmark-button button ${isFavorite ? `${buttonClass}__bookmark-button--active` : ''}`}
      type="button"
    >
      <svg
        className="place-card__bookmark-icon"
        width={buttonSize.width}
        height={buttonSize.height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}


export default MarkButton;
