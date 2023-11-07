import { useGlobalContext } from '../context/AnecdoteContext';

const Notification = () => {
  const { notification } = useGlobalContext();

  if (!notification) return null;

  const { message, type } = notification;

  return <section type={type}>{message}</section>;
};

export default Notification;
