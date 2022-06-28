import Hero from "../components/Hero/Hero";
import Section from "../modules/Section/Section";
import Title from "../modules/Title/Title";
import Paragraph from "../modules/Paragraph/Paragraph";
import styles from "./pages.module.scss";

export default function HomePage() {
  return (
    <div className={styles.view}>
      <Hero />
      <Section color="white">
        <div>
          <Title level={1}>Something</Title>
          <Paragraph>Something</Paragraph>
        </div>
      </Section>

      <Section color="lightgray">
        <div>
          <Title level={1}>Something</Title>
          <Paragraph>Something</Paragraph>
        </div>
      </Section>

      <Section color="darkgray">
        <div>
          <Title level={1}>Something</Title>
          <Paragraph>Something</Paragraph>
        </div>
      </Section>
    </div>
  );
}
