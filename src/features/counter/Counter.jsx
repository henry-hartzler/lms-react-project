import { Row, Col, Button, Badge } from "reactstrap";
import { increment, decrement, selectCount, selectStudentById } from '../students/studentsSlice'
import { useDispatch, useSelector } from "react-redux";

const Counter = ({ points }) => {
  const point = useSelector(selectStudentById(points)).points;
  const dispatch = useDispatch();

  return (
    <Row>
      <Col>
        <Button outline color='primary' className="m-3" onClick={() => dispatch(decrement(point))}>-</Button>
          <Badge 
            color={point === 0 ? 'secondary' : point < 0 ? 'danger' : 'success'} 
            className="m-3 p-3"
          >
            {point}
          </Badge>
        <Button outline color='primary' className="m-3" onClick={() => dispatch(increment(point))}>+</Button>
      </Col>
    </Row>
    );
}
 
export default Counter;