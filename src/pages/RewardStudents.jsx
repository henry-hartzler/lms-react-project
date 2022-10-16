import { Container } from "reactstrap";
import StudentsList from "../features/students/StudentsList";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectStudentById } from "../features/students/studentsSlice";

const RewardStudents = () => {
    const { studentId } = useParams();
    const student = useSelector(selectStudentById(studentId));

    return (
        <Container>
            <StudentsList student={student} studentId={studentId} />
        </Container>
      );
}
 
export default RewardStudents;