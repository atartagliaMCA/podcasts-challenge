import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export function Navbar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        style={{ textDecoration: "none", color: "var(--darkBlue)" }}
      >
        <h1>Podcaster</h1>
      </NavLink>
    </div>
  );
}
