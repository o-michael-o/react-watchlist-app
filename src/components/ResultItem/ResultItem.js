import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

export const ResultItem = ({ movie }) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

  // check if movie in watchlist already
  let storedMovie = watchlist.find((obj) => obj.id === movie.id);

  // variable for toggling btn disabled state
  const watchlistDisabled = storedMovie ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "n/d"}
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            onClick={() => addMovieToWatchlist(movie)}
            disabled={watchlistDisabled}
          >
            add to watchlist
          </button>
        </div>
      </div>
    </div>
  );
};
