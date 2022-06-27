import styles from "./Paragraph.module.scss";
import classNames from "classnames";

const WEIGHTS = ["normal", "bold", "italic", "small"];

const STYLES = ["primary", "secondary", "light", "accent", "danger"];

export default function Paragraph({ children, textStyle, textColor }) {
  const checkTextStyle = WEIGHTS.includes(textStyle) ? textStyle : WEIGHTS[0];
  const checkTextColor = STYLES.includes(textColor) ? textColor : STYLES[0];

  return (
    <p
      className={classNames(
        styles.paragraph,
        styles[checkTextStyle],
        styles[checkTextColor]
      )}
    >
      {children}
    </p>
  );
}
