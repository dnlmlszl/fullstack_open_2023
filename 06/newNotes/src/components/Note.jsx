import { useDispatch } from 'react-redux';
import { toggleImportance } from '../store/noteSlice';

const Note = ({ content, important, id }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <p>{content}</p>
      {/* <p>{important ? 'important' : ''}</p> */}
      <button onClick={() => dispatch(toggleImportance(id))}>
        {important ? 'Not important' : 'Make it important'}
      </button>
    </li>
  );
};

export default Note;
