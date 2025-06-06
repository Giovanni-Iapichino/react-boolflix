import { MediaContext } from "../../contexts/MediaContext";
import { useContext } from "react";
import ResultSectionMovies from "../MainComponents/ResultSectionMovies";
import ResultSectionSeries from "../MainComponents/ResultSectionSeries";

export default function Main() {
  const { movies, series } = useContext(MediaContext);
  const noResults = movies.length === 0 && series.length === 0;

  return (
    <main className="container">
      {noResults ? (
        <p>Nessun film o serie trovata. Fai una ricerca per iniziare.</p>
      ) : (
        <>
          <ResultSectionMovies movies={movies} />
          <hr />
          <ResultSectionSeries series={series} />
        </>
      )}
    </main>
  );
}
