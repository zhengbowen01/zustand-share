import { Button, Row, Col } from "antd";
import useCounterStore from "./use-counter-store";

export default function Base() {
  const { count, add, addOne, minusOne, minus, asyncAddOne } =
    useCounterStore();

  return (
    <div>
      <div>{count}</div>
      <Row gutter={10} style={{ marginTop: 20 }}>
        <Col>
          <Button onClick={() => add(5)}>add 5</Button>
        </Col>
        <Col>
          <Button onClick={addOne}>add 1</Button>
        </Col>
        <Col>
          <Button onClick={() => minus(5)}>minus 5</Button>
        </Col>
        <Col>
          <Button onClick={minusOne}>minus 1</Button>
        </Col>
        <Col>
          <Button onClick={asyncAddOne}>async add 1</Button>
        </Col>
      </Row>
    </div>
  );
}
