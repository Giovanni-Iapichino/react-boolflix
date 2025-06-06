export default function ResultSection({ movies }) {
  function getFlagsPath(original_language) {
    const supportedLanguages = ["it", "en", "fr", "es", "de"];
    return supportedLanguages.includes(original_language)
      ? `/flags/${original_language}.png`
      : "/flags/Unknown.png";
  }

  return (
    <section className="result-section">
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
    </section>
  );
}
