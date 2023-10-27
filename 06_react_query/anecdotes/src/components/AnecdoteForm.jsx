import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAnecdote } from '../utils/requests';
import { useGlobalContext } from '../context/NotificationContext';

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const { notificationDispatch } = useGlobalContext();

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes']);
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote));
    },
    onError: (error) => {
      notificationDispatch({
        type: 'SET',
        payload: error.message,
      });
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';

    newAnecdoteMutation.mutate({ content, votes: 0 });
    notificationDispatch({ type: 'SET', payload: `New anecdote created!` });
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
