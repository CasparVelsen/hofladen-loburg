import styles from "./introductionSection.module.scss";
import Section from "../../modules/Section/Section";
import Title from "../../modules/Title/Title";
import Paragraph from "../../modules/Paragraph/Paragraph";
import Button from "../../modules/Button/Button";

export default function IntroductionSection() {
  return (
    <Section color="white">
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.info}>
          <Title level="medium">Interesse wecken</Title>
          <Paragraph>
            Der Text soll in ein paar Sätzen erklären wofür der Hofladen steht.
            Warum der User hier einkaufen soll und was besonders an diesem
            Hofladen ist.
          </Paragraph>
          <div className={styles.buttonAlign}>
            <Button buttonStyle="primary-outlined">Über uns</Button>
            <Button buttonStyle="secondary">Unsere Produkte</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
