import { MediaContext } from "../../contexts/MediaContext";
import { useContext } from "react";
import ResultSection from "../MainComponents/ResultSection";

export default function Main() {
  const { movies, series } = useContext(MediaContext);
  const noResults = movies.length === 0 && series.length === 0;

  return (
    <main className="container">
      {noResults ? (
        <h3 className="text-center mt-5">
          Nessun film o serie trovata. Fai una ricerca per iniziare.
        </h3>
      ) : (
        <>
          {movies.length > 0 ? (
            <h2 className="mt-5 text-center">Sezione Film</h2>
          ) : (
            ""
          )}
          <ResultSection items={movies} />

          {series.length > 0 ? (
            <h2 className="mt-5 text-center">Sezione Serie TV</h2>
          ) : (
            ""
          )}
          <ResultSection items={series} />
        </>
      )}
    </main>
  );
}
