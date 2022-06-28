import Button from "../modules/Button/Button";
import Paragraph from "../modules/Paragraph/Paragraph";
import Title from "../modules/Title/Title";

export default function HomePage() {
  return (
    <div className="view">
      <h1>HomePage</h1>
      <Button buttonStyle="primary">Something</Button>
      <Button buttonStyle="warning">Something</Button>
      <Button buttonStyle="danger">Something</Button>
      <Button buttonStyle="succes">Something</Button>
      <Button buttonStyle="primary--outline">Something</Button>
      <Button buttonStyle="warning--outline">Something</Button>
      <Button buttonStyle="danger--outline">Something</Button>
      <Button buttonStyle="succes--outline">Something</Button>
      <Button buttonStyle="primary" buttonSize="small">
        Something
      </Button>
      <Button buttonStyle="primary" buttonSize="medium">
        Something
      </Button>
      <Button buttonStyle="primary" buttonSize="large">
        Something
      </Button>

      <Title titleStyle="normal">Title dcjnsdjcnsdjk</Title>
      <Title titleStyle="gray">Title example</Title>
      <Title titleStyle="light">Title example</Title>
      <Title titleStyle="secondary">Title example</Title>
      <Title titleStyle="accent">Title example</Title>
      <Title titleStyle="danger">Title example</Title>
      <Title titleStyle="succes">Title example</Title>
      <Title titleStyle="primary--underlined">Title example</Title>
      <Title titleStyle="secondary--underlined">Title example</Title>
      <Title titleStyle="accent--underlined">Title example</Title>
      <Title titleStyle="danger--underlined">Title example</Title>
      <Title titleStyle="succes--underlined">Title example</Title>

      <Title titleStyle="primary" level={1}>
        Title example
      </Title>
      <Title titleStyle="primary" level={2}>
        Title example
      </Title>
      <Title titleStyle="primary" level={3}>
        Title example
      </Title>
      <Title titleStyle="primary" level={4}>
        Title example
      </Title>

      <Paragraph textColor="normal">
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
      </Paragraph>
      <Paragraph textColor="gray">
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
      </Paragraph>
      <Paragraph textColor="light">
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
      </Paragraph>
      <Paragraph textColor="primary">
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
      </Paragraph>
      <Paragraph textColor="secondary">
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
      </Paragraph>
      <Paragraph textColor="accent">
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
      </Paragraph>
      <Paragraph textColor="danger">
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
        chkdbchsdbchjsdbcjhsdbchsbdncjsdncjsdncjsdncjsdncjsdncjsdncjsdncjsdnckjn
      </Paragraph>
    </div>
  );
}
