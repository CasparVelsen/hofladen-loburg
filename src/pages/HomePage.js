import Hero from "../components/Hero/Hero";
import styles from "./pages.module.scss";

export default function HomePage() {
  return (
    <div className={styles.view}>
      <Hero />
      <div className={styles.content}>
        <h1>HomePage</h1>
      </div>
    </div>
  );
}
