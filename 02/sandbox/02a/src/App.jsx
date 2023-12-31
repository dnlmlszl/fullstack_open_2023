import { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/notes';
import Notification from './components/Notification';
import Footer from './components/Footer';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('a new note');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  console.log(notes);

  function hook() {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }

  useEffect(() => hook, []);

  function addNote(e) {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      // id: notes.length + 1,
    };

    noteService.create(noteObject).then((returnedNotes) => {
      setNotes(notes.concat(returnedNotes));
      setNewNote('');
    });
  }

  function handleNoteChange(e) {
    setNewNote(e.target.value);
  }

  function toggleImportanceOf(id) {
    // const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((nt) => id === nt.id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNotes) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNotes)));
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(
          `Note ${note.content} was already removed from the server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNotes(notes.filter((n) => n.id !== id));
      });
  }

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <main className="main">
      <h2>Notes</h2>
      <Notification message={errorMessage} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button className="showBtn" onClick={() => setShowAll((shw) => !shw)}>
          Show {showAll ? 'Important' : 'All'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note._id}
            toggleImportance={() => toggleImportanceOf(note._id)}
            {...note}
          />
        ))}
      </ul>
      {/* <ul>
        {notes.map((note) => {
          return <Note key={note.id} {...note} />;
        })}
      </ul> */}
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button className="formBtn" type="submit">
          submit
        </button>
      </form>
      <Footer />
    </main>
  );
}

export default App;
