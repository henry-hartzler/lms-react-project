import { Card, CardImg, CardTitle } from "reactstrap"; 
import Counter from "../counter/Counter";

const StudentCard = ({ student }) => {
    const {id, img, name, points} = student;

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
            <Counter key={id} id={id} points={points} />
        </Card>
      );
}
 
export default StudentCard;