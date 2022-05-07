import { useContext } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

import { GlobalContext } from "../../context/GlobalState";

export const MovieControls = ({ movie, type }) => {
  const {
    removeFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <BsEyeFill />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatchlist(movie.id)}
          >
            <ImCross />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <BsEyeSlashFill />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <ImCross />
          </button>
        </>
      )}
    </div>
  );
};
