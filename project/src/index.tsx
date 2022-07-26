import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Offers = {
  COUNT_OFFERS: 5,
};

root.render(
  <StrictMode>
    <App
      offersCount = {Offers.COUNT_OFFERS}
      offers = { offers }
      reviews = { reviews }
    />
  </StrictMode>,
);
