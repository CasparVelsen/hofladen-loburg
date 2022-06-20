import styled from "styled-components";

export default function Title({ text, isAccent, isBold, size }) {
  return (
    <Style isAccent={isAccent} isBold={isBold} size={size}>
      {text}
    </Style>
  );
}

const Style = styled.h1`
  color: ${(props) => (props.isAccent ? "red" : "black")};
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
  font-size: ${(props) => props.size || "21px"};
  margin: 1.2rem 0;
`;
