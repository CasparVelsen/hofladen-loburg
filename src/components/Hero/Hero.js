import styles from "./hero.module.scss";
import Title from "../../modules/Title/Title";
import Paragraph from "../../modules/Paragraph/Paragraph";
import Button from "../../modules/Button/Button";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <Title level="medium" titleStyle="light">
          Hofladen Loburg
        </Title>
        <Title level="large" titleStyle="light">
          Köstlichkeiten und Kultur
        </Title>
        <Paragraph textColor="light">
          Hier kommt eine kurze Beschreibung des Hofladens hin, um den User
          abzuholen
        </Paragraph>
        <NavLink to="/assortment">
          <Button buttonStyle="secondary" buttonSize="large">
            Unsere Produkte
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
