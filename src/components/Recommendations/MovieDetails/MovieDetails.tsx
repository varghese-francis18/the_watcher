import React from "react";
import { MovieProps } from "../../CurrentMovie/CurrentMovie";
import "./MovieDetails.scss";
import { SMALL_IMG_COVER_BASE_URL } from "../../../API/config";
import { Movie } from "../../../App";
import { RecommendationsProps } from "../Recommendations";

interface MovieDetailsProps {
  movie: Movie;
  updateCurrentMovie: (movie: Movie) => void;
}

const MovieDetails = ({ movie, updateCurrentMovie }: MovieDetailsProps) => {
  return (
    <div
      className="movie-details"
      style={{
        background: `url(${SMALL_IMG_COVER_BASE_URL}${movie.backdrop_path}) no-repeat center / cover`,
      }}
      onClick={() => updateCurrentMovie(movie)}
    >
      <div className="movie-title">{movie.title}</div>
    </div>
  );
};

export default MovieDetails;
