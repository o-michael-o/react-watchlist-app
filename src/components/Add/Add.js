import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ResultItem } from "../ResultItem/ResultItem";

export const Add = () => {
  const [search, setSearch] = useState("");
  const [movieResults, setMovieResults] = useState([]);

  const handleInputChange = (evt) => {
    evt.preventDefault();
    setSearch(evt.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${evt.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setMovieResults(data.results);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for movie..."
              value={search}
              onChange={handleInputChange}
            />
          </div>
          {movieResults.length > 0 && (
            <ul className="results">
              {movieResults.map((movie) => (
                <ResultItem key={uuidv4()} movie={movie} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
