import { PageCardСategory } from '../../const';
import HeaderLogo from '../../components/header-logo/header-logo';
import { useAppSelector } from '../../hooks';
import { getActiveCityOffers } from '../../utils/utils';
import CitiesList from '../../components/cities-list/cities-list';
import OffersEmpty from '../../components/offers-empty/offers-empty';
import OffersMain from '../../components/offers-main/offers-main';


function Main(): JSX.Element {
  const { offers, activeCity } = useAppSelector((state) => state);

  const activeCityOffers = getActiveCityOffers(activeCity, offers);

  const offersCount = activeCityOffers.length;

  const isEmptyOffers = !offersCount;

  return (
    <div className="page page--gray page--main">
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
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
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

      <main className={`page__main page__main--index ${isEmptyOffers ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList activeCity={activeCity} />
          </section>
        </div>
        <div className="cities">
          {isEmptyOffers
            ? <OffersEmpty activeCity={activeCity} />
            : <OffersMain offersCount={offersCount} activeCityOffers={activeCityOffers} cardClass={PageCardСategory.Main} activeCity={activeCity} />}
        </div>
      </main>
    </div>
  );
}

export default Main;
