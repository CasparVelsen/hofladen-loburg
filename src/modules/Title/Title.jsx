import "./Title.scss";

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
        <h3 className={`title--3 ${checkTitleStyle}`}>{children}</h3>
      )}

      {level === 4 && (
        <h4 className={`title--4 ${checkTitleStyle}`}>{children}</h4>
      )}
    </>
  );
}
