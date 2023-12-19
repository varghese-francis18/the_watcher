import { Movie } from "../../App";
import MovieDetails from "./MovieDetails/MovieDetails";
import "./Recommendations.scss";

export interface RecommendationsProps {
  movieList: Movie[];
  updateCurrentMovie: (movie: Movie) => void;
}
const Recommendations = ({
  movieList,
  updateCurrentMovie,
}: RecommendationsProps) => {
  return (
    <div className="movie-list">
      {movieList.map((item) => (
        <MovieDetails movie={item} updateCurrentMovie={updateCurrentMovie} />
      ))}
    </div>
  );
};

export default Recommendations;
