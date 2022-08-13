import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import PageNotFound from '../page-not-found/page-not-found';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offer';
import { Review } from '../../types/review';
import { useAppDispatch } from '../../hooks';
import { setOffers } from '../../store/action';
import { offers } from '../../mocks/offers';

type AppProps = {

  nearPlacesOffers: Offers;
  reviews: Review[];
}

function App({ nearPlacesOffers, reviews }: AppProps): JSX.Element {

  const dispatch = useAppDispatch();

  dispatch(setOffers(offers));

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites offers={offers} />
          </PrivateRoute>
        }
        />
        <Route path={`${AppRoute.Offer}/:id`}
          element={<Room offers={offers} nearPlacesOffers={nearPlacesOffers} reviews={reviews} />}
        />
        <Route path={AppRoute.PageNotFound} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>);
}

export default App;
