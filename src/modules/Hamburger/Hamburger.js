import styles from "./Hamburger.module.scss";

export default function Hamburger({ toggleMenu, active }) {
  return (
    <div className={styles.burger} onClick={toggleMenu}>
      <div className={active ? styles.bar1 : ""}></div>
      <div className={active ? styles.bar2 : ""}></div>
      <div className={active ? styles.bar3 : ""}></div>
    </div>
  );
}
