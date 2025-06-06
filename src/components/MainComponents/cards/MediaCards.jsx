import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fullStar,
  faStar as emptyStar,
} from "@fortawesome/free-solid-svg-icons";

export default function MovieCards({ item }) {
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
    <div
      className="media-card"
      style={{ backgroundImage: `url(${item.poster})` }}
    >
      <div className="card-overlay">
        {item.title === item.original_title ? (
          <p>Titolo: {item.title}</p>
        ) : (
          <>
            <p>Titolo: {item.title}</p>
            <p>Titolo Originale: {item.original_title}</p>
          </>
        )}
        <p className="d-flex align-items-center">
          Lingua:
          <img
            src={getFlagsPath(item.original_language)}
            alt={item.original_language}
            style={{ width: "24px", height: "16px", marginLeft: "6px" }}
          />
        </p>
        <p>
          Voto: {renderStars(item.vote_average)}{" "}
          {typeof item.vote_average === "number"
            ? item.vote_average === 10 || item.vote_average === 0
              ? item.vote_average
              : item.vote_average.toFixed(1)
            : "N/A"}
        </p>
        <p className="overview">{item.overview}</p>
      </div>
    </div>
  );
}
