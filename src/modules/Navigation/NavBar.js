import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { useState } from "react";
import styles from "./NavBar.module.scss";
import classNames from "classnames";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={classNames(isOpen ? styles.navActive : styles.nav)}>
      <div>Logo</div>
      <Navigation />
      <MobileNavigation isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
}
