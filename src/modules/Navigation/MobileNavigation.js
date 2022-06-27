import Hamburger from "../Hamburger/Hamburger";
import styles from "./NavBar.module.scss";
import NavLinks from "./NavLinks";
import { useState } from "react";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={styles.mobileNavigation}>
      {isOpen && <NavLinks toggleMenu={toggleMenu} />}
      <Hamburger toggleMenu={toggleMenu} active={isOpen} />
    </nav>
  );
}
