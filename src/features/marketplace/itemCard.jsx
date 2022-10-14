import { Card, CardBody, CardImg, CardTitle } from "reactstrap"; 
import Inventory from "../inventory/Inventory";


const ItemCard = ({ item }) => {
    const {img, name, price} = item;

    return (
        <Card body>
            <CardImg 
                width='100%'
                src = {img}
                alt = {name}
                className='mt-3'
                top
            />
            <CardTitle className="m-3" tag='h1'>{name}</CardTitle>
            <CardBody className="m-3" tag='h3'>${price}</CardBody>
            <Inventory />
        </Card>
      );
}
 
export default ItemCard;