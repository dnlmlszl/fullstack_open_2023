import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'ALL',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
