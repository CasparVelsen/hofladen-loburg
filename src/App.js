import Paragraph from "./components/Paragraph/Paragraph";
import Title from "./components/Title/Title";

function App() {
  return (
    <main>
      <Title level={1} titleStyle="primary--underlined">
        Hofladen Loburg
      </Title>
      <Paragraph textStyle="normal" textColor="light">
        sjcnsjdcnkjsdncjksnckjsndjcndjsjcnsjdcnkjsdncjksnckjsndjcndjsjcnsjdcnkjsdncjksnckjsndjcndjsjcnsjdcnkjsdncjksnckjsndjcndj
      </Paragraph>
    </main>
  );
}

export default App;
