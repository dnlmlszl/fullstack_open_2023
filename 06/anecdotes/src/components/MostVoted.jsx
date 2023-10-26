import Title from './Title';
import Statistics from './Statistics';

const MostVoted = ({ anecdote }) => {
  return (
    <div className="highlight-container">
      <Title>Anecdote with the most votes</Title>
      <p className="content">
        {anecdote ? anecdote.content : 'No most voted anecdote'}
      </p>
      {anecdote && <Statistics>has {anecdote.votes} votes</Statistics>}
    </div>
  );
};

export default MostVoted;
