import Button from "../modules/Button/Button";
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

      <Title titleStyle="normal">Title example</Title>
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
    </div>
  );
}
