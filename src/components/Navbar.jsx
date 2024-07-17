import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/classes">Kurse</NavLink>

      <NavLink to="/membership">Mitgliedschaft</NavLink>

      <NavLink to="/posts">Posts</NavLink>
    </nav>
  );
}
