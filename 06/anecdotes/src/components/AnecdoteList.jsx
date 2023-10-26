import { useSelector } from 'react-redux';
import { selectMostVotedAnecdote } from '../store/anecdotesSlice';
import AnecdotesFilter from './AnecdotesFilter';
import Anecdotes from './Anecdotes';
import AnecdoteOfTheDay from './AnecdoteOfTheDay';
import MostVoted from './MostVoted';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);

  const filter = useSelector((state) => state.filter.filter);
  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  );

  const mostVotedAnecdote = useSelector(selectMostVotedAnecdote);

  if (!anecdotes || anecdotes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <AnecdotesFilter />
      {filteredAnecdotes.map((anecdote) => (
        <Anecdotes key={anecdote.id} anecdote={anecdote} />
      ))}
      <section className="list-container">
        <AnecdoteOfTheDay />
        <MostVoted anecdote={mostVotedAnecdote} />
      </section>
    </div>
  );
};

export default AnecdoteList;
