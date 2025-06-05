import { createContext, useState } from "react";
import axios from "axios";

export const MovieContext = createContext();

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);

  const searchMovies = (query) => {
    if (!query) return;

    const apiKey = import.meta.env.VITE_API_KEY;

    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    const seriesUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`;

    axios.get(movieUrl).then((movieRes) => {
      const moviesData = movieRes.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        original_title: movie.original_title,
        original_language: movie.original_language,
        vote_average: movie.vote_average,
        type: "movie",
      }));

      axios.get(seriesUrl).then((seriesRes) => {
        const seriesData = seriesRes.data.results.map((serie) => ({
          id: serie.id,
          title: serie.name,
          original_title: serie.original_name,
          original_language: serie.original_language,
          vote_average: serie.vote_average,
          type: "series",
        }));
        setMovies([...moviesData, ...seriesData]);
      });
    });
  };

  return (
    <MovieContext.Provider value={{ movies, searchMovies }}>
      {children}
    </MovieContext.Provider>
  );
}
