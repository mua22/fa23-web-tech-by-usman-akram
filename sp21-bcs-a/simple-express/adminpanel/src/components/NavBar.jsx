import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <ul id="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/universities">Universities</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/sort-example">Sort Example</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
