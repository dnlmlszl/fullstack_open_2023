import Notes from './components/Notes';
import NoteForm from './components/NoteForm';
import NotesFilter from './components/NotesFilter';
import noteService from './services/notes.js';
import { setNotes } from './store/noteSlice.js';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    noteService
      .getAll()
      .then((notes) => {
        dispatch(setNotes(notes));
      })
      .catch((error) => console.error('Some error occured', error));
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
