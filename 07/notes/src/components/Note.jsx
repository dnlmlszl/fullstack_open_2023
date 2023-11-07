import { Link } from 'react-router-dom';

const Note = ({ id, important, content, onClick }) => {
  return (
    <>
      <Link to={`/notes/${id}`}>{content}</Link>
      <button onClick={onClick}>
        {important ? 'important' : 'not important'}
      </button>
    </>
  );
};

export default Note;
