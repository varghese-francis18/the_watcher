import "./CurrentMovie.scss";
import { Movie } from "../../App";
import FiveStarRating from "./StarComponent/FiveStarRating";
export interface MovieProps {
  movie: Movie;
  onClick?: () => void;
}
const CurrentMovie = ({ movie }: MovieProps) => {
  const { title, overview, vote_average } = movie;
  const rating = vote_average / 2;
  return (
    <div className="current-movie">
      <div className="movie_title">{title}</div>
      <div className="movie_rating">
        <FiveStarRating rating={rating} />
        <span>{rating.toFixed(2)}</span>
      </div>
      <div className="movie_overview">{overview}</div>
    </div>
  );
};

export default CurrentMovie;
