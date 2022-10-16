import { useState } from "react";
import { Row, Col, Button, Badge } from "reactstrap";

const Counter = ({ points }) => {
  const [point, setPoints] = useState(points);

  return (
    <Row>
      <Col>
        <Button outline color='primary' className="m-3" onClick={() => setPoints(point - 1)}>-</Button>
          <Badge 
            color={point === 0 ? 'secondary' : point < 0 ? 'danger' : 'success'} 
            className="m-3 p-3"
          >
            {point}
          </Badge>
        <Button outline color='primary' className="m-3" onClick={() => setPoints(point + 1)}>+</Button>
      </Col>
    </Row>
    );
}
 
export default Counter;