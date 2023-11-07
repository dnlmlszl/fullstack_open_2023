import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/AnecdoteContext';
import axios from 'axios';

const Anecdote = () => {
  const { anecdotes, setAnecdotes, setNotification, setIsLoading, loading } =
    useGlobalContext();

  const { id: anecdoteId } = useParams();

  const anecdote = anecdotes.find((a) => a.id === Number(anecdoteId));

  const vote = async () => {
    // const anecdote = anecdoteById(id);

    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setIsLoading(true);

    try {
      await axios.patch(`http://localhost:3000/anecdotes/${anecdoteId}`, {
        votes: updatedAnecdote.votes,
      });
      setAnecdotes(
        anecdotes.map((a) =>
          a.id === Number(anecdoteId) ? updatedAnecdote : a
        )
      );
      setNotification({
        type: 'success',
        message: `Anecdote "${updatedAnecdote.content}" has been voted!`,
      });
    } catch (error) {
      console.error('Error updating anecdote votes: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!anecdote) {
    return <p>Anecdote not found.</p>;
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>{anecdote.content}</h2>
      <p>{`Author: ${anecdote.author}`}</p>
      <p>{`Further info: ${anecdote.info}`}</p>
      <p>{`Votes: ${anecdote.votes}`}</p>
      <button onClick={vote}>Vote</button>
    </div>
  );
};

export default Anecdote;
