import Button from "../modules/Button/Button";
import styles from "./pages.module.scss";

export default function ProductsPage() {
  return (
    <div className={styles.view}>
      <h1>ProductsPage</h1>
      <Button buttonStyle="danger">Something</Button>
    </div>
  );
}
