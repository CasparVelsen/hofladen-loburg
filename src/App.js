import Title from "./modules/Title";
import Paragraph from "./modules/Paragraph";
import styled from "styled-components";
import Button from "./modules/Button";

function App() {
  return (
    <main>
      <Test>test</Test>
      <Title text={"Test Headline"} isAccent={true} isBold={true} />
      <Paragraph
        text={
          "ajckjaBCJKABSCJKBSACJKBSACJBajbckjsabcjasbcjksabcjajckjaBCJKABSCJKBSACJKBSACJBajbckjsabcjasbcjksabcjajckjaBCJKABSCJKBSACJKBSACJBajbckjsabcjasbcjksabcjajckjaBCJKABSCJKBSACJKBSACJBajbckjsabcjasbcjksabcjajckjaBCJKABSCJKBSACJKBSACJBajbckjsabcjasbcjksabcjajckjaBCJKABSCJKBSACJKBSACJBajbckjsabcjasbcjksabcj"
        }
        weight={"lighter"}
      />
      <Test>test</Test>
      <Button text={"something"} secondary />
    </main>
  );
}

const Test = styled.div`
  border: 0.5px solid grey;
`;

export default App;
