import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CurrentMovie from "./components/CurrentMovie/CurrentMovie";
import axios from "axios";

import { BACKDROP_PATH, BASE_URL } from "./API/config";
import Recommendations from "./components/Recommendations/Recommendations";

export interface Movie {
  adult?: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
}

export class MoviesAPI {
  static async fetchPopularMovie() {
    const response = await axios.get(
      `${BASE_URL}movie/popular?api_key=${import.meta.env.VITE_REACT_API_KEY}`
    );
    return response.data.results;
  }

  static async fetchRecommendedMovie(movie_id: number) {
    const api = import.meta.env.VITE_REACT_API_KEY;
    const response = await axios.get(`${BASE_URL}movie/popular?api_key=${api}`);
    return response.data.results;
  }

  static async fetchByTitle(movie: string) {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${
        import.meta.env.VITE_REACT_API_KEY
      }&query=${movie}`
    );
    return response.data.results;
  }
}

function App() {
  const [currentMovie, setCurrentMovie] = useState<Movie>();
  const [recommendations, setRecommendations] = useState([]);

  async function fetchPopular() {
    const popularMoviesList = await MoviesAPI.fetchPopularMovie();
    if (popularMoviesList) {
      setCurrentMovie(popularMoviesList[Math.trunc(Math.random() * 19)]);
    }
  }

  async function fetchRecommendations(movie_id: any) {
    const recommendationsList = await MoviesAPI.fetchRecommendedMovie(movie_id);
    if (recommendationsList) {
      setRecommendations(recommendationsList);
    }
  }

  function updateCurrentMovie(movie: Movie) {
    setCurrentMovie(movie);
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    fetchRecommendations(currentMovie?.id);
  }, [currentMovie]);

  return (
    <div
      className="App"
      style={{
        background: currentMovie
          ? `url(${BACKDROP_PATH}${currentMovie.backdrop_path}) no-repeat center / cover`
          : `black`,
      }}
    >
      <Header updateCurrentMovie={updateCurrentMovie} />
      {currentMovie && <CurrentMovie movie={currentMovie} />}

      {recommendations && (
        <Recommendations
          movieList={recommendations}
          updateCurrentMovie={updateCurrentMovie}
        />
      )}
    </div>
  );
}

export default App;
