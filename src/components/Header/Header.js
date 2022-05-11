import { Link } from "react-router-dom";

import Icon from "./favicon.png";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">
              <img
                src={Icon}
                alt=""
                style={{ width: "1.5rem", marginRight: "0.75rem" }}
              />
              Movies
            </Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                Add Movie
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
