import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import StudentCard from "./StudentCard";
import { selectAllStudents } from "./studentsSlice";

const StudentsList = () => {
    const students = useSelector(selectAllStudents);

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
 
export default StudentsList;