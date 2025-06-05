import { MovieContext } from "../../contexts/MovieContext";
import { useContext } from "react";

export default function Main() {
  const { movies } = useContext(MovieContext);

  function getFlagsPath(original_language) {
    const supportedLanguages = ["it", "en", "fr", "es", "de"];
    return supportedLanguages.includes(original_language)
      ? `/flags/${original_language}.png`
      : "/flags/Unknown.png";
  }

  return (
    <main>
      <div className="container">
        {movies.length > 0 ? (
          <ul>
            {movies.map((item) => (
              <li key={item.id}>
                <p>Tipo: {item.type === "movie" ? "Film" : "Serie"}</p>
                <p>Titolo: {item.title}</p>
                <p>Titolo Originale: {item.original_title}</p>
                <p>
                  Lingua:
                  <img
                    src={getFlagsPath(item.original_language)}
                    alt={item.original_language}
                    style={{ width: "24px", height: "16px", marginLeft: "6px" }}
                  />
                </p>
                <p>Voto: {item.vote_average}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nessun film o serie trovata. Fai una ricerca per iniziare.</p>
        )}
      </div>
    </main>
  );
}
