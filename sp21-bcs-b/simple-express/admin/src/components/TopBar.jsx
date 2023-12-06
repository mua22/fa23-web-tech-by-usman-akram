import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <ul id="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
