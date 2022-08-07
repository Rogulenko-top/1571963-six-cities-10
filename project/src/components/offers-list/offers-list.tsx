import { Fragment, useState } from 'react';
import { Offers } from '../../types/offer';
import { PageCardСategory } from '../../const';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers;
  cardClass: PageCardСategory;
};

function OffersList({ offers, cardClass }: OffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  if (activeCard === undefined) {
    return <div />;
  }

  return (
    <Fragment>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          cardClass={cardClass}
          onActive={() => setActiveCard(offer.id)}
          onInactive={() => setActiveCard(null)}
        />)
      )}
    </Fragment>
  );
}

export default OffersList;
