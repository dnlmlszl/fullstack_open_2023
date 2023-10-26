import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdote';

export const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    incrementVote: (state, action) => {
      const anecdoteToVote = state.find(
        (anecdote) => anecdote.id === action.payload.id
      );
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1;
      }
    },
    addAnecdote: (state, action) => {
      state.push(action.payload);
    },
    setAnecdotes: (state, action) => {
      return action.payload;
    },
    randomAnecdote: (state) => {
      const randomIndex = Math.floor(Math.random() * state.anecdotes.length);
      return state.anecdotes[randomIndex];
    },
  },
});

export const {
  selectRandom,
  incrementVote,
  addAnecdote,
  setAnecdotes,
  randomAnecdote,
} = anecdotesSlice.actions;

export const selectRandomAnecdote = (state) => {
  const randomIndex = Math.floor(Math.random() * state.anecdotes.length);
  return state.anecdotes[randomIndex];
};

export const selectMostVotedAnecdote = (state) => {
  if (state.anecdotes.length === 0) {
    return null;
  }
  return state.anecdotes.reduce((prev, current) =>
    prev.votes > current.votes ? prev : current
  );
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(addAnecdote(newAnecdote));
  };
};

export const reducer = anecdotesSlice.reducer;
