import { Offer } from '../../types/offer';
import Cards from '../cards/cards';
import FormFilter from '../filter-form/filter-form';
import { useState } from 'react';
import Map from '../../components/map/map';
import { City } from '../../mocks/offers';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [currentCardId, setCardId] = useState<number>(0);
  const offerList = offers.map((element) => {
    const keyValue = `${element.id}-${element.title}`;
    return <Cards key={keyValue.toString()} offer={element} onMouseOver={() => setCardId(element.id)} />;
  });

  return (
    <div className="cities" id={`${currentCardId}`}>
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <FormFilter />
          <div className="cities__places-list places__list tabs__content">
            {offerList}
          </div>
        </section>
        <div className="cities__right-section">
          <Map
            city={City}
            offers={offers}
          />
        </div>
      </div>
    </div>
  );
}

export default OffersList;
