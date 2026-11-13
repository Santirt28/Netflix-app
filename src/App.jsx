import { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import useMovies from './hooks/useMovies.js';

export default function App() {
  const [query, setQuery] = useState('');
  const { movies, loading, error } = useMovies(query);

  return (
    <div className="app">
      <header className="top-bar">
        <SearchBar query={query} onQueryChange={setQuery} />
      </header>

      <main className="content">
        {loading && <p className="message">Loading...</p>}
        {error && <p className="message error">{error}</p>}
        {!loading && !error && <MovieList movies={movies} />}
      </main>
    </div>
  );
}
