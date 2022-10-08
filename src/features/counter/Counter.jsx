import { useState } from "react";
import { Container, Row, Col, Button, Badge } from "reactstrap";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Row>
        <Col>
          <Button className="m-3" onClick={() => setCount(count - 1)}>-</Button>
            <Badge color="success" className="m-3 p-3">{count}</Badge>
          <Button className="m-3" onClick={() => setCount(count + 1)}>+</Button>
        </Col>
      </Row>
      
    </Container>
    );
}
 
export default Counter;