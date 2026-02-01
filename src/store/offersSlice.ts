import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import offers from '../mocks/offers';
import { OffersState } from '../types/types';

const initialState: OffersState = {
  offers: offers,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const favoriteOffer = state.offers.find((offer) => offer.id === action.payload);
      if (favoriteOffer) {
        favoriteOffer.isFavorite = !favoriteOffer.isFavorite;
      }
    }
  },
});

export const { toggleFavorite } = offersSlice.actions;
export default offersSlice.reducer;
