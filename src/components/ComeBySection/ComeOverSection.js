import { useState } from "react";
import Button from "../../modules/Button/Button";
import Section from "../../modules/Section/Section";
import Title from "../../modules/Title/Title";
import styles from "./comeOverSection.module.scss";

export default function ComeOverSection() {
  const [showAdresse, setShowAdresse] = useState(false);

  return (
    <Section color="darkgray">
      <div className={styles.inviteCard}>
        <Title titleStyle="light" level="medium">
          Besuche uns!
        </Title>
        <Title titleStyle="light" level={4}>
          Komme vorbei und lerne uns kennen.
        </Title>
        <Title titleStyle="light" level={4}>
          Wir freuen uns auf Dich!
        </Title>
        <div className={styles.buttonAlign}>
          {!showAdresse && (
            <Button
              buttonStyle="warning"
              buttonSize="medium"
              onClick={() => setShowAdresse(true)}
            >
              Unsere Adresse
            </Button>
          )}
          {showAdresse && (
            <Button
              buttonStyle="warning"
              buttonSize="medium"
              onClick={() => setShowAdresse(false)}
            >
              Verstecke Adresse
            </Button>
          )}
          <Button buttonStyle="secondary" buttonSize="medium">
            Kontakt
          </Button>
        </div>
        {showAdresse && (
          <div className={styles.adresse}>
            <Title titleStyle="light" level={3} className={styles.adresse}>
              Adresse:
            </Title>
            <span>Straße, Hausn</span>
            <span>Postleitzahl, Ort</span>
          </div>
        )}
      </div>
      <div className={styles.openingHoursCard}></div>
    </Section>
  );
}
