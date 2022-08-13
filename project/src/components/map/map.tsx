import { Marker } from 'leaflet';
import { useRef } from 'react';
import { Offers } from '../../types/offer';
import { City } from '../../const';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { getActiveCityLocation } from '../../utils/utils';
import useChangeLocation from '../../hooks/useChangeLocation';
import useMarker from '../../hooks/useMarker';

type MapProps = {
  activeCity: City;
  activeCityOffers: Offers;
  className: string;
};

function Map({ activeCityOffers, activeCity, className }: MapProps): JSX.Element {

  const activeCityLocation = getActiveCityLocation(activeCity, activeCityOffers);

  const mapRef = useRef(null);
  const prevActiveCityRef = useRef<City>(activeCity);
  const prevMarkersRef = useRef<Marker[]>([]);

  const map = useMap(mapRef, activeCityLocation);

  useChangeLocation(
    prevActiveCityRef,
    prevMarkersRef,
    activeCity,
    activeCityLocation,
    map
  );

  useMarker(prevMarkersRef, activeCityOffers, map);

  return (
    <section className={`map ${className}`} ref={mapRef}>
    </section>
  );
}

export default Map;
