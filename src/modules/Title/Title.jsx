import styles from "./Title.module.scss";
import classNames from "classnames";

const STYLES = [
  "normal",
  "secondary",
  "accent",
  "danger",
  "succes",
  "primary--underlined",
  "secondary--underlined",
  "accent--underlined",
  "danger--underlined",
  "succes--underlined",
];

export default function Title({ children, titleStyle, level }) {
  const checkTitleStyle = STYLES.includes(titleStyle) ? titleStyle : STYLES[0];

  return (
    <>
      {level === undefined && (
        <h1 className={classNames(styles.title1, styles[checkTitleStyle])}>
          {children}
        </h1>
      )}

      {level === 1 && (
        <h1 className={classNames(styles.title1, styles[checkTitleStyle])}>
          {children}
        </h1>
      )}

      {level === 2 && (
        <h2 className={classNames(styles.title2, styles[checkTitleStyle])}>
          {children}
        </h2>
      )}

      {level === 3 && (
        <h3 className={classNames(styles.title3, styles[checkTitleStyle])}>
          {children}
        </h3>
      )}

      {level === 4 && (
        <h4 className={classNames(styles.title4, styles[checkTitleStyle])}>
          {children}
        </h4>
      )}
    </>
  );
}
