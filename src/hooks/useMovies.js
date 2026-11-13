import { useEffect, useState } from 'react';
import useDebounce from './useDebounce.js';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = 'https://www.omdbapi.com/';

export default function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useDebounce(query.trim(), 500);

  useEffect(() => {
    if (search.length < 3) {
      setMovies([]);
      setError(null);
      setLoading(false);
      return;
    }

    if (!API_KEY) {
      setError('Missing API key. Create a .env file with VITE_API_KEY=your_key');
      return;
    }

    const controller = new AbortController();

    async function fetchMovies() {
      setLoading(true);
      setError(null);

      try {
        const url = `${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(search)}`;
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Network error: ${response.status}`);
        }

        const data = await response.json();

        if (data.Response === 'False') {
          setMovies([]);
          setError('No movies found');
        } else {
          setMovies(data.Search);
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchMovies();

    return () => controller.abort();
  }, [search]);

  return { movies, loading, error };
}
