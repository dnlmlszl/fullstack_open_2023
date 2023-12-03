import axios from 'axios';
import { useEffect, useState } from 'react';
import { Note } from './types';
import { createNote, getAllNotes } from './services/noteService';

function App() {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState<Note[]>([{ id: 1, content: 'testing' }]);

  const noteCreation = (e: React.SyntheticEvent) => {
    e.preventDefault();

    createNote({ content: newNote }).then((data) => {
      setNotes(notes.concat(data));
    });

    setNewNote('');
  };

  useEffect(() => {
    getAllNotes().then((data) => {
      setNotes(data);
    });
  }, []);

  return (
    <>
      <div>
        <form onSubmit={noteCreation}>
          <input
            type="text"
            value={newNote}
            onChange={({ target }) => setNewNote(target.value)}
          />
          <button type="submit">add</button>
        </form>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>{note.content}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
