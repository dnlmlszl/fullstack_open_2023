const AddForm = ({
  addName,
  newName,
  handleNameChange,
  number,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addName}>
      <div>
        Name:{' '}
        <input
          type="text"
          value={newName}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        Number:{' '}
        <input
          type="text"
          value={number}
          onChange={handleNumberChange}
          required
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddForm;
