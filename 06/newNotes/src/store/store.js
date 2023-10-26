import { reducer as notesReducer } from '../store/noteSlice.js';
import { filterReducer } from '../store/filterSlice.js';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({
  notes: notesReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer,
});
