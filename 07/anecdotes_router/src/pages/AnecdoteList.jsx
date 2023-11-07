import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/AnecdoteContext';

const AnecdoteList = () => {
  const { anecdotes, loading } = useGlobalContext();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map((anecdote) => (
          <Link to={`/anecdotes/${anecdote.id}`} key={anecdote.id}>
            <li>{anecdote.content}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
