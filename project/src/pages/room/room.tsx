import { Fragment } from 'react';
import { ReviewSection } from '../../components/review-section/review-section';
import HeaderLogo from '../../components/header-logo/header-logo';
import { Offers } from '../../types/offer';
import { Review } from '../../types/review';
import { useParams } from 'react-router-dom';
import PageNotFound from '../../components/page-not-found/page-not-found';
import { ButtonСategory, ImagePropertyCount, PageCardСategory } from '../../const';
import { getCountStars, capitalizeFirstLetter } from '../../utils/utils';
import PropertyImage from '../../components/property-image/property-image';
import OffersList from '../../components/offers-list/offers-list';
import MarkButton from '../../components/mark-button/mark-button';
import UserReview from '../../components/user-review/user-review';
import PropertyGoods from '../../components/property-goods/property-goods';

type RoomProps = {
  offers: Offers;
  nearPlacesOffers: Offers;
  reviews: Review[];
}

function Room({ offers, nearPlacesOffers, reviews }: RoomProps): JSX.Element {
  const { id } = useParams();
  const numId = Number(id);
  const offer = offers.find((item) => item.id === numId);
  const isNaN = !numId;
  const isNotOffer = !offer;

  if (isNaN || isNotOffer) {
    return <PageNotFound />;
  }

  const images = offer.images.slice(ImagePropertyCount.Start, ImagePropertyCount.End);
  const countStars = getCountStars(offer.rating);
  const offerType = capitalizeFirstLetter(offer.type);
  return (
    <Fragment>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <HeaderLogo />
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="/">
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="/">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">

                {images.map((src) => <PropertyImage key={src} src={src} />)}

              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">

                <div
                  className="property__mark"
                  hidden={!offer.isPremium}
                >
                  <span>Premium</span>
                </div>

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>

                  <MarkButton
                    buttonClass={ButtonСategory.Property}
                    isFavorite={offer.isFavorite}
                  />
                </div>

                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: countStars }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>

                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offerType}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {`${offer.bedrooms} Bedrooms`}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {`Max ${offer.maxAdults} adults`}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>

                <PropertyGoods goods={offer.goods} />

                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>
                    <span className="property__user-status">
                      {offer.host.isPro ? 'Pro' : ''}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.description}
                    </p>
                  </div>
                </div>


                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                  <ul className="reviews__list">

                    <UserReview
                      reviews={reviews}
                    />

                  </ul>

                  <ReviewSection />

                </section>


              </div>
            </div>

            <section className="property__map map"></section>
          </section>


          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">

                <OffersList
                  offers={nearPlacesOffers}
                  cardClass={PageCardСategory.Property}
                />

              </div>
            </section>
          </div>
        </main>
      </div>
    </Fragment >
  );
}

export default Room;
