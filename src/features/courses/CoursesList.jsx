import { Row, Col } from "reactstrap";
import CourseCard from "./CourseCard";
import { selectAllCourses } from './coursesSlice';
import { useSelector } from "react-redux";

const CoursesList = () => {
    const courses = useSelector(selectAllCourses);
    
    return (
        <Row className='ms-auto'>{courses.map((course) =>
             <Col 
                className='p-2 m-2'
                key={course.id}
             >
                <CourseCard course={course}/>
             </Col>)}
        </Row>
    );
}

export default CoursesList;