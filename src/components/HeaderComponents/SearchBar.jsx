import { MediaContext } from "../../contexts/MediaContext";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const [searchTitle, setSearchTitle] = useState("");
  const { searchMedia } = useContext(MediaContext);

  const handleSearch = (e) => {
    e.preventDefault();
    searchMedia(searchTitle);
    setSearchTitle("");
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Cerca un film..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      <button type="submit" className="search-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}
