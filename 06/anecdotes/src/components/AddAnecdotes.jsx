import { useDispatch } from 'react-redux';
import { addAnecdote } from '../store/anecdotesSlice';
import { clearNotification, setNotification } from '../store/notificationSlice';
import anecdoteService from '../services/anecdote';

const AddAnecdotes = () => {
  const dispatch = useDispatch();

  const addNewAnecdote = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    if (!content) {
      dispatch(
        setNotification({
          type: 'error',
          message: 'Please add a valid anecdote.',
        })
      );
      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
      return;
    }
    try {
      const newAnecdote = await anecdoteService.createNew(content);
      dispatch(addAnecdote(newAnecdote));
      dispatch(
        setNotification({ type: 'success', message: 'Anecdote added!' })
      );
    } catch (error) {
      dispatch(
        setNotification({
          type: 'error',
          message: 'Error when adding new Anecdote',
        })
      );
    } finally {
      e.target.content.value = '';
      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
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
