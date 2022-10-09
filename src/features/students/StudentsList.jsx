import { Row, Col } from "reactstrap";
import StudentCard from "./StudentCard";
import { selectAllStudents } from "./studentsSlice";

const StudentsList = () => {
    const students = selectAllStudents();

    return (
        <Row className="ms-auto">
            {students.map(student => {
                return (
                    <Col
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
 
export default StudentsList;