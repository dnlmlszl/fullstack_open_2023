import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducer as anecdotesReducer } from './anecdotesSlice.js';
import { filterReducer } from './filterSlice';
import { notificationReducer } from './notificationSlice';

const reducer = combineReducers({
  anecdotes: anecdotesReducer,
  filter: filterReducer,
  notification: notificationReducer,
});

const store = configureStore({
  reducer,
});

export default store;
