import styles from "./hero.module.scss";
import testImage from "../../images/test-hero-unsplash.jpg";
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
          Regional, Sessional
        </Title>
        <Paragraph textColor="light">
          Hier kommt eine kurze Beschreibung des Hofladens hin, um den User
          abzuholen
        </Paragraph>
        <NavLink to="/assortment">
          <Button buttonStyle="warning" buttonSize="large">
            Click me
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
