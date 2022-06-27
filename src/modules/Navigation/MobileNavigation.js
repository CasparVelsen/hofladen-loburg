import Hamburger from "../Hamburger/Hamburger";
import "./NavBar.scss";
import NavLinks from "./NavLinks";
import { useState } from "react";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="mobile-navigation">
      {isOpen && <NavLinks toggleMenu={toggleMenu} />}
      <Hamburger toggleMenu={toggleMenu} active={isOpen} />
    </nav>
  );
}
