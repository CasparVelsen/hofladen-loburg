import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { useState } from "react";
import styles from "./NavBar.module.scss";
import classNames from "classnames";
import Logo from "../../images/logo-negativ.jpg";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={classNames(isOpen ? styles.navActive : styles.nav)}>
      {!isOpen && (
        <NavLink to="/">
          <div className={styles.logoBox}>
            <img src={Logo} height="100%" alt="Logo" />
          </div>
        </NavLink>
      )}
      <Navigation isOpen={isOpen} />
      <MobileNavigation isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
}
