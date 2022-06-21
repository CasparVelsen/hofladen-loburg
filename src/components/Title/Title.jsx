import "./Title.css";

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
      {level === 1 && (
        <h1 className={`title--1 ${checkTitleStyle}`}>{children}</h1>
      )}

      {level === 2 && (
        <h2 className={`title--2 ${checkTitleStyle}`}>{children}</h2>
      )}

      {level === 3 && (
        <h3 className={`subtitle ${checkTitleStyle}`}>{children}</h3>
      )}

      {level === 4 && (
        <h4 className={`title ${checkTitleStyle}`}>{children}</h4>
      )}

      {level === 5 && (
        <h5 className={`title ${checkTitleStyle}`}>{children}</h5>
      )}

      {level === 6 && (
        <h6 className={`title ${checkTitleStyle}`}>{children}</h6>
      )}
    </>
  );
}
