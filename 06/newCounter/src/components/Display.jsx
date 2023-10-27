import { useGlobalContext } from '../context/CounterContext';

const Display = () => {
  const { counter } = useGlobalContext();
  return <h2 className="title">{counter}</h2>;
};
export default Display;
