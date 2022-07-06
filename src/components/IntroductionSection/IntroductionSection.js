import styles from "./introductionSection.module.scss";
import Section from "../../modules/Section/Section";
import Title from "../../modules/Title/Title";
import Paragraph from "../../modules/Paragraph/Paragraph";
import Button from "../../modules/Button/Button";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logos/logo.jpg";

export default function IntroductionSection() {
  return (
    <Section color="white">
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" height="100%" />
        </div>
        <div className={styles.info}>
          <Title level="medium">Interesse wecken</Title>
          <Paragraph>
            Der Text soll in ein paar Sätzen erklären wofür der Hofladen steht.
            Warum der User hier einkaufen soll und was besonders an diesem
            Hofladen ist.
          </Paragraph>
          <div className={styles.buttonAlign}>
            <NavLink to="/about">
              <Button buttonStyle="primary">Über uns</Button>
            </NavLink>
            <NavLink to="/contact">
              <Button buttonStyle="secondary-outlined">Kontakt</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
