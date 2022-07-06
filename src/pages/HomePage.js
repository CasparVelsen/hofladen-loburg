import Hero from "../components/Hero/Hero";
import styles from "./pages.module.scss";
import IntroductionSection from "../components/IntroductionSection/IntroductionSection";
import ProductsOverviewSection from "../components/ProductsOverviewSection/ProductsOverviewSection";
import ComeOverSection from "../components/ComeBySection/ComeOverSection";

export default function HomePage() {
  return (
    <div className={styles.view}>
      <Hero />
      <IntroductionSection />
      <ProductsOverviewSection />
      <ComeOverSection />
    </div>
  );
}
