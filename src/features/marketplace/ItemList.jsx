import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import ItemCard from "./ItemCard";
import { selectAllItems } from "./itemSlice";
import ItemForm from "./ItemForm";

const ItemList = () => {
    const items = useSelector(selectAllItems);

    return items && items.length > 0 ? (
            <Row className="ms-auto d-flex align-items-center">
                <Col xs='12' className="m-3 mt-4">
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