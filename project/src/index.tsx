import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Offers = {
  COUNT_OFFERS: 5,
};

root.render(
  <React.StrictMode>
    <App
      offersCount = {Offers.COUNT_OFFERS}
    />
  </React.StrictMode>,
);
