const Person = ({ _id, name, number, handleDel }) => {
  return (
    <li>
      <p>
        <span>{name} </span>
        {number}
      </p>
      <button onClick={() => handleDel(_id)} className="deleteBtn">
        Delete
      </button>
    </li>
  );
};

export default Person;
