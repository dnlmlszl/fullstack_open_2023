import { useState } from 'react';
import Statistics from './components/Statistics';
import Button from './components/Button';
import Title from './components/Title';

function App() {
  const anecdotes = [
'But it works in my machine',
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  function handleRandom() {
    const random = Math.floor(Math.random() * anecdotes.length);
    console.log(random);
    setSelected(random);
  }

  function handleVote() {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  const mostVoted = Math.max(...votes);
  const favoriteIndex = votes.indexOf(mostVoted);

  return (
    <main>
      <div>
        <Title>Anecdote of the day</Title>
        <p>{anecdotes[selected]}</p>
        {votes < 1 ? (
          <Statistics>No votes yet</Statistics>
        ) : (
          <Statistics>has {votes[selected]} votes</Statistics>
        )}
        <div className="btnContainer">
          <Button onHandleClick={handleVote} text="Vote" />
          <Button onHandleClick={handleRandom} text="Next anecdote" />
        </div>
      </div>
      <div>
        <Title>Anecdote with the most votes</Title>
        <p>{anecdotes[favoriteIndex]}</p>
        <Statistics>has {votes[favoriteIndex]} votes</Statistics>
      </div>
    </main>
  );
}

export default App;
