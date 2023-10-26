import { createSlice } from '@reduxjs/toolkit';

const generateId = () => {
  return Number((Math.random() * 1000000).toFixed());
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    newNote: (state, action) => {
      // const newNote = {
      //   ...action.payload,
      //   important: false,
      //   id: action.payload.id ? action.payload.id : generateId(),
      // };
      state.push(action.payload);
    },
    toggleImportance: (state, action) => {
      const note = state.notes.find((note) => note.id === action.payload);
      if (note) {
        note.important = !note.important;
      }
    },
    appendNote: (state, action) => {
      state.push(action.payload);
    },
    setNotes: (state, action) => {
      return action.payload;
    },
  },
});

export const { newNote, toggleImportance, appendNote, setNotes } =
  noteSlice.actions;
export const reducer = noteSlice.reducer;
