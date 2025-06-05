import { MovieContext } from "../../contexts/MovieContext";
import { useContext } from "react";

export default function Main() {
  const { movies } = useContext(MovieContext);
  return (
    <main>
      <div className="container">
        {movies.length > 0 ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <p>{movie.title}</p>
                <p>{movie.original_title}</p>
                <p>{movie.original_language}</p>
                <p>{movie.vote_average}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nessun film trovato. Fai una ricerca per iniziare.</p>
        )}
      </div>
    </main>
  );
}
