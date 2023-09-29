const Note = ({ content, important, toggleImportance }) => {
  const label = important ? 'Make not important' : 'Make important';
  return (
    <li>
      <p>{content}</p>
      <button
        className={`${important ? 'active' : 'not'}`}
        onClick={toggleImportance}
      >
        {label}
      </button>
    </li>
  );
};

export default Note;
