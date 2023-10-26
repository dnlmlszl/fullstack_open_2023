import { createSlice } from '@reduxjs/toolkit';

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
      state.push({ ...action.payload, votes: 0 });
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

export const {
  selectRandom,
  incrementVote,
  addAnecdote,
  setAnecdotes,
  randomAnecdote,
} = anecdotesSlice.actions;

export const reducer = anecdotesSlice.reducer;
