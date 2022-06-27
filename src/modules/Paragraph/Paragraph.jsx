import "./Paragraph.scss";

const WEIGHTS = ["normal", "bold", "italic", "small"];

const STYLES = ["primary", "secondary", "light", "accent", "danger"];

export default function Paragraph({ children, textStyle, textColor }) {
  const checkTextStyle = WEIGHTS.includes(textStyle) ? textStyle : WEIGHTS[0];
  const checkTextColor = STYLES.includes(textColor) ? textColor : STYLES[0];

  return (
    <p className={`paragraph ${checkTextStyle} ${checkTextColor}`}>
      {children}
    </p>
  );
}
