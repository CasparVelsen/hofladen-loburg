import Section from "../../modules/Section/Section";
import Title from "../../modules/Title/Title";
import styles from "./produktsOverviewSection.module.scss";

export default function ProduktsOverviewSection() {
  return (
    <Section color="lightgray">
      <div className={styles.container}>
        <Title level="medium">Unsere Produkte</Title>
      </div>
    </Section>
  );
}
