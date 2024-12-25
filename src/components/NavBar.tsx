import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" to="/">
            Users
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/create">
            Create new user
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
