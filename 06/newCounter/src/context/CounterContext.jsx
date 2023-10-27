import { createContext, useContext, useReducer } from 'react';
import { counterReducer } from '../reducers/counterReducer';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, counterDispatch] = useReducer(counterReducer, 0);
  return (
    <CounterContext.Provider value={{ counter, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CounterContext);
};
