import { useDispatch } from 'react-redux';
import { incrementVote } from '../store/anecdotesSlice';
import { clearNotification, setNotification } from '../store/notificationSlice';

import anecdoteService from '../services/anecdote';

const Anecdotes = ({ anecdote }) => {
  const dispatch = useDispatch();

  const handleVote = async () => {
    try {
      const updatedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1,
      };

      const returndeAnecdote = await anecdoteService.updateVotes(
        updatedAnecdote
      );
      dispatch(incrementVote(returndeAnecdote));
      dispatch(
        setNotification({
          type: 'success',
          message: 'Vote added to the anecdote',
        })
      );
    } catch (error) {
      console.error('There was an error: ', error);
      dispatch(
        setNotification({
          type: 'error',
          message: 'Error when adding new Anecdote',
        })
      );
    } finally {
      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  };
  return (
    <div className="section-style">
      <p>{anecdote.content}</p>
      <span>{anecdote.votes}</span>
      <button onClick={handleVote}>Vote</button>
    </div>
  );
};

export default Anecdotes;
