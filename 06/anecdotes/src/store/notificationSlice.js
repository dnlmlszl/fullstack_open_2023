import { createSlice } from '@reduxjs/toolkit';

const initialState = { type: '', message: '' };

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    clearNotification: (state, action) => {
      state.type = '';
      state.message = '';
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
