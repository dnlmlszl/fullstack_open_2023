import { useState } from 'react';
import Title from './components/Title';
import Button from './components/Button';
import Statistics from './components/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = Number((good - bad) / total);
  const positive = `${(good / total) * 100}%`;

  return (
    <main>
      <Title>Give feedback</Title>
      <Button onHandleClick={() => setGood((gd) => gd + 1)} text="good" />
      <Button onHandleClick={() => setNeutral((nt) => nt + 1)} text="neutral" />
      <Button onHandleClick={() => setBad((bd) => bd + 1)} text="bad" />
      <Title>Statistics</Title>
      <Statistics stat={good} text="good" />
      <Statistics stat={neutral} text="neutral" />
      <Statistics stat={bad} text="bad" />
      <Statistics stat={total} text="all" />
      <Statistics stat={average} text="average" />
      <Statistics stat={positive} text="positive" />
    </main>
  );
}

export default App;
