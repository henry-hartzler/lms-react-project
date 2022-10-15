import { Row, Col } from "reactstrap";
import ItemCard from "./itemCard";
import { selectAllItems } from "./itemSlice";

const ItemList = () => {
    const items = selectAllItems();

    return (
        <Row className="ms-auto">
            {items.map(item => {
                return (
                    <Col
                        md='3'
                        className="m-4"
                        key={item.id}
                    >
                        <ItemCard item={item} />
                    </Col>
                )
            })}
        </Row>
    );
}
 
export default ItemList;