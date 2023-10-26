import Notes from './components/Notes';
import NoteForm from './components/NoteForm';
import NotesFilter from './components/NotesFilter';

import { initializeNotes } from './store/noteSlice.js';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, []);

  return (
    <>
      <NoteForm />
      <NotesFilter />
      <Notes />
    </>
  );
}

export default App;
