import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <div className={styles.nav}>
      <div>Logo</div>
      <Navigation />
      <MobileNavigation />
    </div>
  );
}
