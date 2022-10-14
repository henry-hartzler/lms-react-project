import { Card, CardImg, CardTitle } from "reactstrap"; 


const ItemCard = ({ item }) => {
    const {img, name} = item;

    // right now, name spacing is off when shrinking screens
    // make better responsive
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
            
        </Card>
      );
}
 
export default ItemCard;