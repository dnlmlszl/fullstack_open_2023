import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/filterSlice';

const AnecdotesFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  return (
    <div>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => dispatch(setFilter(target.value))}
        placeholder="Filter anecdotes"
      />
    </div>
  );
};

export default AnecdotesFilter;
