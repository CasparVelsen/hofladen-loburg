import styles from "./NavBar.module.scss";
import NavLinks from "./NavLinks";
import { BsInstagram } from "react-icons/bs";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavLinks />
      <a href="https://www.instagram.com/">
        <BsInstagram size={25} color="white" />
      </a>
    </nav>
  );
}
