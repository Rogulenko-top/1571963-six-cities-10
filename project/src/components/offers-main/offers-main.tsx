import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import { Offers } from '../../types/offer';
import { City, PageCardСategory, MapСategory } from '../../const';

type MainOffersProps = {
  offersCount: number;
  activeCityOffers: Offers;
  cardClass: PageCardСategory;
  activeCity: City
}

function OffersMain({ offersCount, activeCityOffers, cardClass, activeCity }: MainOffersProps): JSX.Element {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>

        <b className="places__found">
          {offersCount} places to stay in Amsterdam
        </b>

        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by&nbsp;</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>

        <div className="cities__places-list places__list tabs__content">
          <OffersList
            offers={activeCityOffers}
            cardClass={cardClass}
          />
        </div>
      </section>

      <div className="cities__right-section">
        <Map
          className={MapСategory.Cities}
          activeCity={activeCity}
          activeCityOffers={activeCityOffers}
        />
      </div>

    </div>
  );
}

export default OffersMain;
