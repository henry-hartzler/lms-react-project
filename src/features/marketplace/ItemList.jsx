import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import ItemCard from "./ItemCard";
import { selectAllItems } from "./itemSlice";
import ItemForm from "./ItemForm";

const ItemList = () => {
    const items = useSelector(selectAllItems);

    return items && items.length > 0 ? (
            <Row className="ms-auto">
                <Col md='12' className="d-flex justify-content-end m-3">
                    <ItemForm />
                </Col>
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
        ) : (
            <Row className="m-4">
                <h1>There are currently no items listed in the Marketplace.</h1>
            </Row>
        )
}
 
export default ItemList;