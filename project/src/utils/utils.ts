import { month, City } from '../const';
import { Offers, Offer, Location } from '../types/offer';

const MULTIPLIER_RATING = 20;
const FIRST_LETTER = 0;
const START_INDEX = 1;

export function getCountStars(rating: number): string {
  return `${Math.round(rating) * MULTIPLIER_RATING}%`;
}

export function capitalizeFirstLetter(text: string): string {
  return text.charAt(FIRST_LETTER).toUpperCase() + text.slice(START_INDEX);
}

export function getFormatDate(date: string): string {
  const formDate = new Date(date);
  const year = formDate.getFullYear();
  const numMonth = formDate.getMonth();

  return `${month[numMonth]} ${year}`;
}

function getUniqueCities(offers: Offers): string[] {
  const cities = offers.map((offer) => offer.city.name);
  const uniqueCities = Array.from(new Set(cities));

  return uniqueCities;
}

export function getCitiesOffers(offers: Offers): [string, Offer[]][] {
  const сities = getUniqueCities(offers);
  const sortedCities = сities.sort();
  const cityOffersMap = new Map();

  sortedCities.forEach((city) => {
    const cityOffers = offers.filter((offer) => city === offer.city.name);
    cityOffersMap.set(city, cityOffers);
  });

  return Array.from(cityOffersMap);
}

export function getActiveCityOffers(city: City, offers: Offers): Offers {
  return offers.filter((offer) => city === offer.city.name);
}

export function getActiveCityLocation(city: City, offers: Offers): Location {
  const offersActiveCity = getActiveCityOffers(city, offers);
  const [offer] = offersActiveCity;

  return {
    latitude: offer.city.location.latitude,
    longitude: offer.city.location.longitude,
    zoom: offer.city.location.zoom
  };
}
