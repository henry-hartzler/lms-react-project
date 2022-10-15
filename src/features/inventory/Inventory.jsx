import { Row, Col, Badge } from "reactstrap";

const Inventory = ({ inv }) => {
  
  return (
    <Row className="d-flex flex-row-reverse">
      <Col md='4'>
        <h3>
            <Badge 
              color={inv === 0 ? 'secondary' : inv < 0 ? 'danger' : 'primary'} 
              className="m-3 p-3"
            >
              {inv}
            </Badge>
        </h3>
      </Col>
    </Row>
    );
}
 
export default Inventory;