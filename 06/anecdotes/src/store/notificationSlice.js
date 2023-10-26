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
    clearNotification: (state) => {
      state.type = '';
      state.message = '';
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

export const showNotification = (message, duration, type = 'success') => {
  return async (dispatch) => {
    dispatch(setNotification({ type: type, message: message }));

    setTimeout(() => {
      dispatch(clearNotification());
    }, duration * 1000);
  };
};

export const notificationReducer = notificationSlice.reducer;
