import Title from "../../modules/Title/Title";
import Button from "../../modules/Button/Button";
import styles from "./productsOverviewSection.module.scss";
import categories from "../../data/categories";

export default function ProductsOverviewSection() {
  return (
    <div className={styles.section}>
      <Title level="medium">Unsere Produkte</Title>
      <div className={styles.galeryContainer}>
        {categories.map((data) => (
          <div>
            <div className={styles.productImage}>
              <img src={data.img} height="100%" />
            </div>
            <div className={styles.productName}>{data.name}</div>
          </div>
        ))}
      </div>
      <Button buttonStyle="danger" buttonSize="large">
        Entdecken
      </Button>
    </div>
  );
}
