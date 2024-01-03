import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="nav">
      <h1 className="nav-brand">Assignment</h1>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/flashCard"}>Flash Card</Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"}>Contact</Link>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
