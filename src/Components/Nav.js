import { Link } from "react-router-dom";

import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <div>
        <img
          className="nav-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/40px-How_to_use_icon.svg.png?20150106152712"
          alt=""
        />
        <h2>Nathan Vieira</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/home">Me</Link>
        </li>
        <li>
          <Link className="nav-link" to="/portfolio">Porftolio</Link>
        </li>
        <li>
          <Link className="nav-link" to="/">Resume</Link>
        </li>
        <li>
          <Link className="nav-link" to="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
