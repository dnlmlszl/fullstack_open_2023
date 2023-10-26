import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  let notificationClass = 'base-style';
  if (notification.type === 'success') {
    notificationClass += ' success';
  } else if (notification.type === 'error') {
    notificationClass += ' error';
  }

  return <div className={notificationClass}>{notification.message}</div>;
};

export default Notification;
