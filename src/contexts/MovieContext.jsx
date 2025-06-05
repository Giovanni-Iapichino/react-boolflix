import { createContext, useState } from "react";
import axios from "axios";

export const MovieContext = createContext();

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = (query) => {
    if (!query) return;

    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    setLoading(true);

    axios.get(apiUrl).then((res) => {
      setMovies(res.data.results);
      console.log(res.data.results);
      setLoading(false);
    });
  };

  return (
    <MovieContext.Provider value={{ movies, loading, searchMovies }}>
      {children}
    </MovieContext.Provider>
  );
}
