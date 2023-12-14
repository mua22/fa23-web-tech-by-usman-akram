import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <ul id="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
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

export default TopBar;
