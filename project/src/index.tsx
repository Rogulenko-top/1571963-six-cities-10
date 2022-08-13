import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { nearPlacesOffers, offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import { setOffers } from './store/action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(setOffers(offers));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App
        nearPlacesOffers={nearPlacesOffers}
        reviews={reviews}
      />
    </Provider>
  </StrictMode>,
);
