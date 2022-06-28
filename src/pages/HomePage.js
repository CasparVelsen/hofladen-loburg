import Hero from "../components/Hero/Hero";
import styles from "./pages.module.scss";
import IntroductionSection from "../components/IntroductionSection/IntroductionSection";
import ProduktsOverviewSection from "../components/ProduktsOverviewSection/ProduktsOverviewSection";

export default function HomePage() {
  return (
    <div className={styles.view}>
      <Hero />
      <IntroductionSection />
      <ProduktsOverviewSection />
    </div>
  );
}
