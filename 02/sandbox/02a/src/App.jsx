import Note from './components/Note';

function App({ notes }) {
  return (
    <main>
      <h2>notes</h2>
      <ul>
        {notes.map((note) => {
          return <Note key={note.id} {...note} />;
        })}
      </ul>
    </main>
  );
}

export default App;
