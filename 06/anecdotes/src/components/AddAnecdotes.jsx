import { useDispatch } from 'react-redux';
import { createAnecdote } from '../store/anecdotesSlice';
import { showNotification } from '../store/notificationSlice';

const AddAnecdotes = () => {
  const dispatch = useDispatch();

  const addNewAnecdote = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    if (!content) {
      dispatch(showNotification(`Please add a valid anecdote.`, 5, 'error'));

      return;
    }
    try {
      dispatch(createAnecdote(content));
      dispatch(showNotification(`Anecdote added!`, 5, 'success'));
    } catch (error) {
      dispatch(
        showNotification(
          `Error when adding new Anecdote: ${error.message}`,
          5,
          'error'
        )
      );
    }
  };
  return (
    <section className="anecdote-container">
      <h2>Your anecdote here</h2>
      <form onSubmit={addNewAnecdote}>
        <input type="text" name="content" />
        <input type="submit" value="Add anecdote" />
      </form>
    </section>
  );
};

export default AddAnecdotes;
