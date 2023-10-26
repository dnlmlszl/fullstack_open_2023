import { useDispatch } from 'react-redux';
import { newNote } from '../store/noteSlice';
import noteService from '../services/notes';

const NoteForm = () => {
  const dispatch = useDispatch();

  const addNote = async (e) => {
    console.log(e.target);
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = '';
    const addNewNote = await noteService.createNew(content);
    dispatch(newNote(addNewNote));

    // dispatch(
    //   newNote({
    //     content,
    //   })
    // );
  };

  return (
    <section>
      <h2>Add new notes</h2>
      <form onSubmit={addNote}>
        <input type="text" name="note" />
        <input type="submit" value="Add note" />
      </form>
    </section>
  );
};

export default NoteForm;
