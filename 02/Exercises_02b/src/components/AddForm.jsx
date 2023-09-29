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
        <label>Name</label>
        <input
          type="text"
          value={newName}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label>Number</label>
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
