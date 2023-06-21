const Search = ({ changes, valor }) => {
  return (
    <>
      <h1>Search a Youtube Video</h1>

      <form>
        <input onChange={changes} value={valor} type="text" />
        <button>Search</button>
      </form>
    </>
  );
};


export default Search;