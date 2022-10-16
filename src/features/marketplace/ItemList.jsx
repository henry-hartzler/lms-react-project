import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import ItemCard from "./ItemCard";
import { selectAllItems } from "./itemSlice";

const ItemList = () => {
    const items = useSelector(selectAllItems);

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