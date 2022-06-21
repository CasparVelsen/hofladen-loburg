import React from "react";
import "./Button.css";

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
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
