import styled from "styled-components";

export default function Paragraph({ text, color, weight, size }) {
  return (
    <Style color={color} weight={weight} size={size}>
      {text}
    </Style>
  );
}

const Style = styled.p`
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.weight || "normal"};
  font-size: ${(props) => props.size || "16px"};
  margin: 1rem 0;
  word-wrap: break-word;
`;
