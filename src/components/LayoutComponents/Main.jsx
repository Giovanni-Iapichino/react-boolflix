import { MediaContext } from "../../contexts/MediaContext";
import { useContext } from "react";
import ResultSection from "../MainComponents/ResultSection";

export default function Main() {
  const { movies, series } = useContext(MediaContext);
  const noResults = movies.length === 0 && series.length === 0;

  return (
    <main className="container">
      {noResults ? (
        <p className="text-center">
          Nessun film o serie trovata. Fai una ricerca per iniziare.
        </p>
      ) : (
        <>
          <ResultSection items={movies} />
          <hr />
          <ResultSection items={series} />
        </>
      )}
    </main>
  );
}
