import { OfferPreview } from '../types/types';

export const changeCity = (city: string) => ({
  type: 'SET_CITY',
  payload: city,
});

export const loadOffers = (offers: OfferPreview[]) => ({
  type: 'SET_OFFERS',
  payload: offers,
});
