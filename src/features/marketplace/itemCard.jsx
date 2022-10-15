import { Card, CardBody, CardImg, CardTitle } from "reactstrap"; 
import Inventory from "../inventory/Inventory";


const ItemCard = ({ item }) => {
    const {img, name, price, inv} = item;

    return (
        <Card body>
            <Inventory top inv={inv} />
            <CardImg 
                width='100%'
                src={img}
                alt={name}
                className='mb-3'
            />
            <CardTitle className="mt-3" tag='h1'>{name}</CardTitle>
            <CardBody className="mb-3" tag='h3'>${price}</CardBody>
        </Card>
      );
}
 
export default ItemCard;