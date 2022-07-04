import Hamburger from "../Hamburger/Hamburger";
import styles from "./NavBar.module.scss";
import NavLinks from "./NavLinks";
import { BsInstagram } from "react-icons/bs";
import Logo from "../../images/logo-negativ.jpg";
import { NavLink } from "react-router-dom";

export default function MobileNavigation({ isOpen, toggleMenu }) {
  return (
    <nav className={styles.mobileNavigation}>
      {isOpen && <NavLinks toggleMenu={toggleMenu} />}
      {isOpen && (
        <a href="https://www.instagram.com/" className={styles.socialIcon}>
          <BsInstagram size={25} color="white" />
        </a>
      )}
      {isOpen && (
        <NavLink to="/">
          <img
            className={styles.logoMobileNav}
            src={Logo}
            height="120px"
            alt="Logo"
          />
        </NavLink>
      )}
      <Hamburger toggleMenu={toggleMenu} active={isOpen} />
    </nav>
  );
}
