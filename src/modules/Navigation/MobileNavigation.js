import Hamburger from "../Hamburger/Hamburger";
import styles from "./NavBar.module.scss";
import NavLinks from "./NavLinks";
import { BsInstagram } from "react-icons/bs";

export default function MobileNavigation({ isOpen, toggleMenu }) {
  return (
    <nav className={styles.mobileNavigation}>
      {isOpen && <NavLinks toggleMenu={toggleMenu} />}
      {isOpen && (
        <a href="https://www.instagram.com/" className={styles.socialIcon}>
          <BsInstagram size={25} color="white" />
        </a>
      )}
      <Hamburger toggleMenu={toggleMenu} active={isOpen} />
    </nav>
  );
}
