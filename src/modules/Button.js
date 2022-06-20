import styled from "styled-components";

export default function Button({ text, secondary, weight }) {
  return (
    <Style secondary={secondary} weight={weight}>
      {text}
    </Style>
  );
}

const Style = styled.button`
  font-weight: ${(props) => props.weight || "normal"};
  font-size: 16px;
  border: 1px solid ${(props) => (props.secondary ? "green" : "red")};
  color: ${(props) => (props.secondary ? "green" : "red")};
  background-color: white;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 1rem 0;
`;
