import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ReviewsState, Review } from '../types/types';

const initialState: ReviewsState = {
  reviews: [],
  isLoading: false,
  hasError: false,
};

export const fetchReviews = createAsyncThunk<
  Review[],
  string,
  { extra: AxiosInstance }
>('reviews/fetchReviews', async (offerId, { extra: api }) => {
  const { data } = await api.get<Review[]>(`/six-cities/comments/${offerId}`);
  return data;
});

export const postReview = createAsyncThunk<
  Review,
  { offerId: string; comment: string; rating: number },
  { extra: AxiosInstance }
>('reviews/postReview', async ({ offerId, comment, rating }, { extra: api }) => {
  const { data } = await api.post<Review>(`/six-cities/comments/${offerId}`, {
    comment,
    rating,
  });
  return data;
});

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
      });

    builder
      .addCase(postReview.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews.unshift(action.payload);
      })
      .addCase(postReview.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default reviewSlice.reducer;
