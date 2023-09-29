import { useState } from 'react';
import Note from './components/Note';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('a new note');
  const [showAll, setShowAll] = useState(true);

  function hook() {
    console.log('effect');

    axios.get('http://localhost:3001/notes').then((response) => {
      console.log('promise fulfiled');
      setNotes(response.data);
    });
  }

  useEffect(() => hook, []);
  console.log('render', notes.length, 'notes');

  function addNote(e) {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject));
    setNewNote('');
  }
  function handleNoteChange(e) {
    console.log(e.target.value);
    setNewNote(e.target.value);
  }

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <main>
      <h2>Notes</h2>
      <div>
        <button onClick={() => setShowAll((shw) => !shw)}>
          Show {showAll ? 'Important' : 'All'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ul>
      {/* <ul>
        {notes.map((note) => {
          return <Note key={note.id} {...note} />;
        })}
      </ul> */}
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </main>
  );
}

export default App;
