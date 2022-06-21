import Paragraph from "./components/Paragraph";
import Title from "./components/Title";

function App() {
  return (
    <main>
      <Title level={1} titleStyle="secondary--underlined">
        Hofladen Loburg
      </Title>
      <Paragraph textStyle="normal" textColor="secondary">
        sjcnsjdcnkjsdncjksnckjsndjcndjsjcnsjdcnkjsdncjksnckjsndjcndjsjcnsjdcnkjsdncjksnckjsndjcndjsjcnsjdcnkjsdncjksnckjsndjcndj
      </Paragraph>
    </main>
  );
}

export default App;
