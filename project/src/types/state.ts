import { Offers } from './offer';
import { City } from '../const';
import { store } from '../store';

export type InitialState = {
  activeCity: City;
  offers: Offers;
}

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

