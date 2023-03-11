import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="nav-items">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Page1">PAGE1</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
