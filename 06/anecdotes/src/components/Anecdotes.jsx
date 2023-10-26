import { useDispatch } from 'react-redux';
import { incrementVote } from '../store/anecdotesSlice';
import { showNotification } from '../store/notificationSlice';

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
      dispatch(showNotification(`Vote added to the anecdote`, 5, 'success'));
    } catch (error) {
      dispatch(
        showNotification(
          `Error when voting for an Anecdote: ${error.message}`,
          5,
          'error'
        )
      );
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
