import { useEffect } from 'react';
import { useGlobalContext } from '../context/NotificationContext';

const Notification = () => {
  const { notification, notificationDispatch } = useGlobalContext();

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        notificationDispatch({ type: 'CLEAR' });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notification, notificationDispatch]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  return <div style={style}>{notification}</div>;
};

export default Notification;
