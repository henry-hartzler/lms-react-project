import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import ItemCard from "./ItemCard";
import { selectAllItems } from "./itemSlice";

const ItemList = () => {
    const items = useSelector(selectAllItems);

    if (items && items.length > 0) {
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

    return (
        <Row className="m-4">
            <h1>There are currently no items listed in the Marketplace.</h1>
        </Row>
    )
}
 
export default ItemList;