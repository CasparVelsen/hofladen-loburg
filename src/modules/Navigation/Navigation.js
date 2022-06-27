import styles from "./NavBar.module.scss";
import NavLinks from "./NavLinks";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavLinks />
    </nav>
  );
}
