import { useState } from "react";
import Button from "../../modules/Button/Button";
import Section from "../../modules/Section/Section";
import Title from "../../modules/Title/Title";
import styles from "./comeOverSection.module.scss";
import { NavLink } from "react-router-dom";
import Paragraph from "../../modules/Paragraph/Paragraph";

export default function ComeOverSection() {
  const [showAdresse, setShowAdresse] = useState(false);

  return (
    <Section color="darkgray">
      <div className={styles.container}>
        {!showAdresse ? (
          <div className={styles.inviteCard}>
            <Title titleStyle="light" level="medium">
              Besuche uns!
            </Title>
            <Paragraph textColor="light">
              Komme vorbei und lerne uns kennen.
            </Paragraph>
            <Paragraph textColor="light">Wir freuen uns auf Dich!</Paragraph>
            <div className={styles.buttonAlign}>
              <NavLink to="/contact">
                <Button buttonStyle="secondary" buttonSize="medium">
                  Kontakt
                </Button>
              </NavLink>
              <Button
                buttonStyle="warning-outlined"
                buttonSize="medium"
                onClick={() => setShowAdresse(true)}
              >
                Unsere Adresse
              </Button>
            </div>
          </div>
        ) : (
          <div className={styles.adresse}>
            <Title titleStyle="light" level="medium">
              Unsere Adresse:
            </Title>
            <Paragraph textColor="light">Straße, Hausn</Paragraph>
            <Paragraph textColor="light">Postleitzahl, Ort</Paragraph>
            <div className={styles.buttonAlign}>
              <NavLink to="/contact">
                <Button buttonStyle="secondary" buttonSize="medium">
                  Kontakt
                </Button>
              </NavLink>
              <Button
                buttonStyle="warning-outlined"
                buttonSize="medium"
                onClick={() => setShowAdresse(false)}
              >
                Verstecke Adresse
              </Button>
            </div>
          </div>
        )}
        <div className={styles.openingHoursCard}>
          <Title level={2} titleStyle="light">
            Öffnungszeiten:
          </Title>
          <Paragraph textColor="light">Mo - Fr: 10-18 Uhr</Paragraph>
          <Paragraph textColor="light">Sa: 10-14 Uhr</Paragraph>
          <Paragraph textColor="danger">So: geschlossen</Paragraph>
        </div>
      </div>
    </Section>
  );
}
