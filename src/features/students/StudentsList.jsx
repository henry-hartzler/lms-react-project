import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import StudentCard from "./StudentCard";
import { selectAllStudents } from "./studentsSlice";
import StudentForm from "./StudentForm";

//may not need studentId but also may need for StudentDetailPage
const StudentsList = ({studentId}) => {
    const students = useSelector(selectAllStudents);

    return students && students.length > 0 ? (
        <Row className="ms-auto d-flex align-items-center">
                <Col xs='12' className="m-3 mt-4">
                    <StudentForm />
                </Col>
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
        ) : (
        <Row className="m-4 ms-auto">
            <Col md='12' className="d-flex justify-content-end m-3">
                <StudentForm />
            </Col>
            <Col>
                <h1>There are currently no students registered.</h1>
            </Col>
        </Row>
    )
}   
 
export default StudentsList;