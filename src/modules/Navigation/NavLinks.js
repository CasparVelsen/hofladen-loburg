import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavLinks({ toggleMenu }) {
  return (
    <ul>
      <li onClick={toggleMenu}>
        <NavLink className="styled-link" to="/">
          Homepage
        </NavLink>
      </li>
      <li onClick={toggleMenu}>
        <NavLink className="styled-link" to="/assortment">
          Sortiment
        </NavLink>
      </li>
      <li onClick={toggleMenu}>
        <NavLink className="styled-link" to="/about">
          Über uns
        </NavLink>
      </li>
      <li onClick={toggleMenu}>
        <NavLink className="styled-link" to="/contact">
          Kontakt
        </NavLink>
      </li>
    </ul>
  );
}
