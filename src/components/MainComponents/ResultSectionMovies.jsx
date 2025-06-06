import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fullStar,
  faStar as emptyStar,
} from "@fortawesome/free-solid-svg-icons";

export default function ResultSection({ movies }) {
  function getFlagsPath(original_language) {
    const supportedLanguages = ["it", "en", "fr", "es", "de"];
    return supportedLanguages.includes(original_language)
      ? `/flags/${original_language}.png`
      : "/flags/Unknown.png";
  }

  const renderStars = (vote_average) => {
    const stars = Math.ceil(vote_average / 2);
    return (
      <>
        {[1, 2, 3, 4, 5].map((i) => (
          <FontAwesomeIcon
            key={i}
            icon={i <= stars ? fullStar : emptyStar}
            style={{ color: i <= stars ? "#ffc107" : "#ccc" }}
          />
        ))}
      </>
    );
  };

  return (
    <section className="result-section">
      <ul>
        {movies.map((item) => (
          <li key={item.id}>
            <p>Tipo: {item.type === "movie" ? "Film" : "Serie"}</p>
            <img src={item.poster} alt={item.title} />
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
            <p>
              Voto: {renderStars(item.vote_average)} {""}
              {item.vote_average === 10 || item.vote_average === 0
                ? item.vote_average
                : item.vote_average.toFixed(1)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
