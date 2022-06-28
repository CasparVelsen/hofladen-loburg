import Button from "../modules/Button/Button";
import styles from "./pages.module.scss";

export default function AssortmentPage() {
  return (
    <div className={styles.view}>
      <h1>AssortmentPage</h1>
      <Button buttonStyle="danger">Something</Button>
    </div>
  );
}
