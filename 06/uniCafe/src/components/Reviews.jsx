import { useDispatch, useSelector } from 'react-redux';
import { good, ok, bad, reset } from '../store/reviewSlice';

const Reviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);

  return (
    <div>
      <button onClick={() => dispatch(good())}>good</button>
      <button onClick={() => dispatch(ok())}>ok</button>
      <button onClick={() => dispatch(bad())}>bad</button>
      <button onClick={() => dispatch(reset())}>reset stats</button>
      <div>good {reviews.good}</div>
      <div>ok {reviews.ok}</div>
      <div>bad {reviews.bad}</div>
    </div>
  );
};

export default Reviews;
