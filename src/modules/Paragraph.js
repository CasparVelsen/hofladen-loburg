import "./Paragraph.css";

export default function Paragraph({ text, color, weight, size }) {
  return (
    <p className={"paragraph"} color={color} weight={weight} size={size}>
      {text}
    </p>
  );
}
