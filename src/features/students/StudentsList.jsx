import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import StudentCard from "./StudentCard";
import { selectAllStudents } from "./studentsSlice";

const StudentsList = () => {
    const students = useSelector(selectAllStudents);

    if (students && students.length > 0) {
        return (
            <Row className="ms-auto">
                {students.map(student => {
                    return (
                        <Col
                            md='3'
                            className="m-4"
                            key={student.id}
                        >
                            <StudentCard student={student} />
                        </Col>
                    )
                })}
            </Row>
        );
    }

    return (
        <Row className="m-4">
            <h1>There are currently no students registered.</h1>
        </Row>
    );
    
}
 
export default StudentsList;