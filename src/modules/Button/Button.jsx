import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

const STYLES = [
  "primary",
  "warning",
  "danger",
  "succes",
  "primary--outline",
  "warning--outline",
  "danger--outline",
  "succes--outline",
];

const SIZE = ["small", "medium", "large"];

export default function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <button
      className={classNames(
        styles.btn,
        styles[checkButtonSize],
        styles[checkButtonStyle]
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
