import { Card, CardImg, CardBody, CardTitle } from "reactstrap"; 
import Counter from "../counter/Counter";

const StudentCard = ({ student }) => {
    const {img, name} = student;

    return (
        <Card>
        <CardBody>
            <CardImg 
                width='100%'
                src = {img}
                alt = {name}
                className='mt-3'
            />
            <CardTitle className="m-3" tag='h1'>{name}</CardTitle>
            <Counter />
        </CardBody>
        </Card>
      );
}
 
export default StudentCard;