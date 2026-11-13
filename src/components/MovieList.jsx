export default function MovieList({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.imdbID} className="movie">
          {movie.Poster !== 'N/A' ? (
            <img src={movie.Poster} alt={movie.Title} />
          ) : (
            <div className="no-poster">No poster</div>
          )}
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </li>
      ))}
    </ul>
  );
}
