import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, zero } from '../store/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  console.log(count);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>plus</button>
      <button onClick={() => dispatch(decrement())}>minus</button>
      <button onClick={() => dispatch(zero())}>zero</button>
    </div>
  );
};

export default Counter;
