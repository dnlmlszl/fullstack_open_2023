import { createContext, useContext, useReducer } from 'react';
import { notificationReducer } from '../reducers/notificationReducer';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    null
  );
  return (
    <NotificationContext.Provider
      value={{ notification, notificationDispatch }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(NotificationContext);
};
