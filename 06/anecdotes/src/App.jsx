import { useDispatch } from 'react-redux';
import { setAnecdotes } from './store/anecdotesSlice';
import { useEffect } from 'react';
import anecdoteService from './services/anecdote';
import AddAnecdotes from './components/AddAnecdotes';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdoteService
      .getAll()
      .then((anecdotes) => {
        dispatch(setAnecdotes(anecdotes));
      })
      .catch((error) => console.error('Some error occured', error));
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
