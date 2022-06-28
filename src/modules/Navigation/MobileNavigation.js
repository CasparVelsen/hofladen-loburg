import Hamburger from "../Hamburger/Hamburger";
import styles from "./NavBar.module.scss";
import NavLinks from "./NavLinks";

export default function MobileNavigation({ isOpen, toggleMenu }) {
  return (
    <nav className={styles.mobileNavigation}>
      {isOpen && <NavLinks toggleMenu={toggleMenu} />}
      <Hamburger toggleMenu={toggleMenu} active={isOpen} />
    </nav>
  );
}
