import React from 'react';
import { setFilter } from '../store/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const NotesFilter = () => {
  const dispatch = useDispatch();
  const filterSelected = (value) => {
    dispatch(setFilter(value));
  };
  return (
    <section>
      all{' '}
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected('ALL')}
      />
      important{' '}
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected('IMPORTANT')}
      />
      nonimportant{' '}
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected('NOT_IMPORTANT')}
      />
    </section>
  );
};

export default NotesFilter;
