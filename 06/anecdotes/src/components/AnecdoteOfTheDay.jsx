import { useSelector } from 'react-redux';
import { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics';
import Title from './Title';

const AnecdoteOfTheDay = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const [selectedAnecdote, setSelectedAnecdote] = useState(
    anecdotes[Math.floor(Math.random() * anecdotes.length)]
  );

  const handleRandomClick = () => {
    const randomAnecdote =
      anecdotes[Math.floor(Math.random() * anecdotes.length)];
    setSelectedAnecdote(randomAnecdote);
  };
  return (
    <div className="highlight-container">
      <Title>Anecdote of the day</Title>
      <p className="content">
        {selectedAnecdote ? selectedAnecdote.content : 'No anecdote selected'}
      </p>
      {selectedAnecdote.votes < 1 ? (
        <Statistics>No votes yet</Statistics>
      ) : (
        <Statistics>has {selectedAnecdote.votes} votes</Statistics>
      )}
      <div className="button-group">
        {/* <Button onHandleClick={handleVote} text="Vote" /> */}
        <Button onHandleClick={handleRandomClick} text="Next anecdote" />
      </div>
    </div>
  );
};

export default AnecdoteOfTheDay;
