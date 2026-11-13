export default function SearchBar({ query, onQueryChange }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search movies..."
        autoFocus
      />
      <button type="submit">Search</button>
    </form>
  );
}
