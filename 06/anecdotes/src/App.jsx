import { useDispatch } from 'react-redux';
import { initializeAnecdotes } from './store/anecdotesSlice';
import { useEffect } from 'react';
import AddAnecdotes from './components/AddAnecdotes';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <main className="main-container">
      <Notification />
      <h1 className="main-title">Anecdotes</h1>
      <AddAnecdotes />
      <AnecdoteList />
    </main>
  );
}

export default App;
