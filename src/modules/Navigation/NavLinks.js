import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

export default function NavLinks({ toggleMenu }) {
  return (
    <ul>
      <li onClick={toggleMenu}>
        <NavLink className={styles.styledLink} to="/">
          Homepage
        </NavLink>
      </li>
      <li onClick={toggleMenu}>
        <NavLink className={styles.styledLink} to="/assortment">
          Sortiment
        </NavLink>
      </li>
      <li onClick={toggleMenu}>
        <NavLink className={styles.styledLink} to="/about">
          Über uns
        </NavLink>
      </li>
      <li onClick={toggleMenu}>
        <NavLink className={styles.styledLink} to="/contact">
          Kontakt
        </NavLink>
      </li>
    </ul>
  );
}
