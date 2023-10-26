import { useSelector } from 'react-redux';
import Note from './Note';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const filter = useSelector((state) => state.filter);

  const filteredNotes = notes.filter((note) => {
    switch (filter) {
      case 'IMPORTANT':
        return note.important;
      case 'NOT_IMPORTANT':
        return !note.important;
      default:
        return true;
    }
  });

  return (
    <section>
      <ul>
        {filteredNotes.map((note) => {
          return <Note key={note.id} {...note} />;
        })}
      </ul>
    </section>
  );
};

export default Notes;
