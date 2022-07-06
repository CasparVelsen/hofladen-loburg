import Section from "../../modules/Section/Section";
import Title from "../../modules/Title/Title";
import styles from "./productsOverviewSection.module.scss";
import categories from "../../data/categories";
import { Navigate } from "react-router-dom";

export default function ProductsOverviewSection() {
  return (
    <Section color="lightgray">
      <div>
        <Title level="medium">Unsere Produkte</Title>
        <div className={styles.galeryContainer}>
          {categories.map((data) => (
            <div className={styles.product}>
              <div className={styles.productImage}>
                <img src={data.img} />
              </div>
              <div className={styles.productName}>{data.name}</div>
              <div className={styles.productLink}>Entdecken</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
