import { useState, useEffect } from "react";
import { Row, Col, Button, Badge } from "reactstrap";

const Counter = ({ id }) => {
  const [points, setPoints] = useStickyState(0, "points");

  return (
    <Row>
      <Col>
        <Button outline color='primary' className="m-3" onClick={() => setPoints(points - 1)}>-</Button>
          <Badge 
            color={points === 0 ? 'secondary' : points < 0 ? 'danger' : 'success'} 
            className="m-3 p-3"
          >
            {points}
          </Badge>
        <Button outline color='primary' className="m-3" onClick={() => setPoints(points + 1)}>+</Button>
      </Col>
    </Row>
    );

    function useStickyState(defaultValue, key) {
      const [value, setValue] = useState(() => {
        const stickyValue = window.localStorage.getItem(id);
        return stickyValue !== null
          ? JSON.parse(stickyValue)
          : defaultValue;
      });
      
      useEffect(() => {
        window.localStorage.setItem(id, JSON.stringify(value));
      }, [key, value]);
      return [value, setValue];
    }
}
 
export default Counter;