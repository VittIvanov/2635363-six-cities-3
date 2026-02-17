import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OffersFull, OffersState } from '../types/types';
import { AxiosInstance } from 'axios';

export const fetchOffers = createAsyncThunk<
  OffersFull[],
  undefined,
  { extra: AxiosInstance }
>('offers/fetchOffers', async (_, { extra: api }) => {
  const { data } = await api.get<OffersFull[]>('/six-cities/offers');
  return data;
});

export const fetchFavorites = createAsyncThunk<
  OffersFull[],
  undefined,
  { extra: AxiosInstance }
>('offers/fetchFavorites', async (_, { extra: api }) => {
  const { data } = await api.get<OffersFull[]>('/six-cities/favorite');
  return data;
});

export const fetchOfferById = createAsyncThunk<
  OffersFull,
  string,
  { extra: AxiosInstance }
>('offers/fetchOfferById', async (offerId, { extra: api }) => {
  const { data } = await api.get<OffersFull>(`/six-cities/offers/${offerId}`);
  return data;
});

export const fetchNearbyOffers = createAsyncThunk<
  OffersFull[],
  string,
  { extra: AxiosInstance }
>('offers/fetchNearbyOffers', async (offerId, { extra: api }) => {
  const { data } = await api.get<OffersFull[]>(`/six-cities/offers/${offerId}/nearby`);
  return data;
});

export const toggleFavoriteServer = createAsyncThunk<
  OffersFull,
  { offerId: string; status: number },
  { extra: AxiosInstance }
>('offers/toggleFavoriteServer', async ({ offerId, status }, { extra: api }) => {
  const { data } = await api.post<OffersFull>(`/six-cities/favorite/${offerId}/${status}`);
  return data;
});

const offersInitialState: OffersState = {
  offers: [],
  isLoading: false,
  hasError: false,
  currentOffer: null,
  nearbyOffers: [],
};

const offersSlice = createSlice({
  name: 'offers',
  initialState: offersInitialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const favoriteOffer = state.offers.find((offer) => offer.id === action.payload);
      if (favoriteOffer) {
        favoriteOffer.isFavorite = !favoriteOffer.isFavorite;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });

    builder
      .addCase(fetchOfferById.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
        state.currentOffer = null;
      })
      .addCase(fetchOfferById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentOffer = action.payload;
      })
      .addCase(fetchOfferById.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.currentOffer = null;
      });

    builder
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });

    builder
      .addCase(toggleFavoriteServer.fulfilled, (state, action: PayloadAction<OffersFull>) => {
        const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
        if (index !== -1) {
          state.offers[index] = action.payload;
        }

        if (state.currentOffer && state.currentOffer.id === action.payload.id) {
          state.currentOffer = action.payload;
        }

        const nearbyIndex = state.nearbyOffers.findIndex((offer) => offer.id === action.payload.id);
        if (nearbyIndex !== -1) {
          state.nearbyOffers[nearbyIndex] = action.payload;
        }
      });
  },
});

export const { toggleFavorite } = offersSlice.actions;
export default offersSlice.reducer;
