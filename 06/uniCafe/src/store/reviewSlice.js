import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    good: (state) => {
      state.good += 5;
    },
    ok: (state) => {
      state.ok += 4;
    },
    bad: (state) => {
      state.bad += 2;
    },
    reset: (state) => {
      return { ...initialState };
    },
  },
});

export const { good, ok, bad, reset } = reviewSlice.actions;
export const reducer = reviewSlice.reducer;

export const store = configureStore({
  reducer: {
    reviews: reducer,
  },
});
