import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const AnecdoteContext = createContext();

export const AnecdoteProvider = ({ children }) => {
  const [anecdotes, setAnecdotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    message: null,
    type: null,
  });

  useEffect(() => {
    const fetchAnecdotes = async () => {
      setIsLoading(true);
      try {
        const response = await axios('http://localhost:3000/anecdotes');
        console.log(response);
        setAnecdotes(response.data);
      } catch (error) {
        console.error('Could not fetch anecdotes', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnecdotes();
  }, []);

  useEffect(() => {
    let timer;
    if (notification) {
      timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [notification]);

  const addNew = async (anecdote) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:3000/anecdotes',
        anecdote
      );

      const newAnecdote = await response.data;

      setAnecdotes((prevAnec) => [...prevAnec, newAnecdote]);
      setNotification({
        type: 'success',
        message: `A new anecdote "${newAnecdote.content}" has been created!`,
      });
    } catch (error) {
      console.error('Error when adding new anecdote: ', error);
      setNotification({
        type: 'error',
        message: 'Error occurred while adding a new anecdote.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnecdoteContext.Provider
      value={{
        anecdotes,
        setAnecdotes,
        addNew,
        notification,
        setNotification,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AnecdoteContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AnecdoteContext);
};
