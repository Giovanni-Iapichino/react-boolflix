import { MovieContext } from "../../contexts/MovieContext";
import { useContext, useState } from "react";

export default function SearchBar() {
  const [searchTitle, setSearchTitle] = useState("");
  const { searchMovies } = useContext(MovieContext);

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(searchTitle);
    setSearchTitle("");
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <button type="submit" className="search-button">
        Cerca
      </button>
    </form>
  );
}
