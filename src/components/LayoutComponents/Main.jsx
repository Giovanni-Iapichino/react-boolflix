import { MediaContext } from "../../contexts/MediaContext";
import { useContext } from "react";
import ResultSection from "../MainComponents/ResultSection";

export default function Main() {
  const { media } = useContext(MediaContext);

  return (
    <main>
      <div className="container">
        <ResultSection media={media} />
      </div>
    </main>
  );
}
