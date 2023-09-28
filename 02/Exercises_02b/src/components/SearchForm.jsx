const SearchForm = ({ searchTerm, setSearchTerm }) => {
  return (
    <form>
      <label>Filter shown with</label>
      <input
        type="search"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <button type="submit">Search</button> */}
    </form>
  );
};

export default SearchForm;
