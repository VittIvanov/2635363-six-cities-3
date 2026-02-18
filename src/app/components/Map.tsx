import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import { MapProps } from '../../types/types';

const defaultIcon = leaflet.icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeIcon = leaflet.icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const Map: React.FC<MapProps> = ({ city, offers, activeOfferId, selectedOfferId }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<leaflet.Map | null>(null);
  const markersLayerRef = useRef<leaflet.LayerGroup | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && mapInstanceRef.current === null) {
      const map = leaflet.map(mapRef.current, {
        center: [
          city.location.latitude,
          city.location.longitude,
        ],
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(map);

      mapInstanceRef.current = map;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    mapInstanceRef.current?.setView(
      [city.location.latitude, city.location.longitude],
      city.location.zoom
    );
  }, [city]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) {
      return;
    }

    if (markersLayerRef.current) {
      markersLayerRef.current.clearLayers();
    }

    const layer = leaflet.layerGroup().addTo(map);

    offers.forEach((offer) => {
      const isCurrentOffer = offer.id === selectedOfferId;
      const isActiveOffer = offer.id === activeOfferId;

      let icon = defaultIcon;
      if (isCurrentOffer) {
        icon = activeIcon;
      } else if (isActiveOffer) {
        icon = activeIcon;
      }

      leaflet
        .marker([offer.location.latitude, offer.location.longitude], { icon })
        .addTo(layer);
    });

    markersLayerRef.current = layer;
  }, [offers, activeOfferId, selectedOfferId]);

  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    />
  );
};

export default Map;
