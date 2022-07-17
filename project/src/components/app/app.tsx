import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import PageNotFound from '../page-not-found/page-not-found';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  offersCount: number;
}

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main offersCount = {offersCount} />}/>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}>
            <Favorites/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<Room/>}/>
        <Route path={AppRoute.PageNotFound} element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>);
}

export default App;
