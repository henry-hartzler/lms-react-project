import { useState } from "react";
import { Row, Col, Badge } from "reactstrap";

const Inventory = () => {
  const [count, setCount] = useState(0);


  return (
    <Row>
      <Col>
          <Badge 
            color={count === 0 ? 'secondary' : count < 0 ? 'danger' : 'success'} 
            className="m-3 p-3"
          >
            {count}
          </Badge>
      </Col>
    </Row>
    );
}
 
export default Inventory;