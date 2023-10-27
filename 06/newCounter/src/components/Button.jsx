import { useGlobalContext } from '../context/CounterContext';

const Button = ({ type, label }) => {
  const { counterDispatch } = useGlobalContext();
  return <button onClick={() => counterDispatch({ type })}>{label}</button>;
};

export default Button;
