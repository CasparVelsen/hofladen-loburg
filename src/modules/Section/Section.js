import classNames from "classnames";
import styles from "./section.module.scss";

const COLORS = [
  "white",
  "lightgray",
  "darkgray",
  "primary",
  "secondary",
  "accent",
];

export default function Section({ color, children }) {
  const checkColor = COLORS.includes(color) ? color : COLORS[0];
  return (
    <div className={classNames(styles.section, styles[checkColor])}>
      {children}
    </div>
  );
}
