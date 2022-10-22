import { useState } from "react";
import { useDispatch } from "react-redux";  
import { Button, Modal, ModalBody, ModalHeader, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { addStudent } from "./studentsSlice";
import { validateStudentForm } from "../../utils/validateStudentForm";
import { getRandomAvatar } from "../../app/shared/STUDENTS";

const StudentForm = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    let randomAv = getRandomAvatar();

    const handleSubmit = values => {
        const student = {
            name: values.name,
            //avatars are selected at random
            img: randomAv,
            points: 0
        }
        dispatch(addStudent(student))
        randomAv = getRandomAvatar();
        setModalOpen(false)
    }

    return (
        <>
            <Button size="lg" outline color="success" onClick={() => setModalOpen(true)}>
                <i className="fa-solid fa-plus"></i> Add Student
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>Add Student</ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            name: ''
                        }}
                        onSubmit={handleSubmit}
                        validate={validateStudentForm}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor="name">
                                    Name
                                </Label>
                                <Field
                                    name='name'
                                    placeholder='Student name'
                                    className='form-control'
                                />
                                <ErrorMessage name='name'>
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                            </FormGroup>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
      );
}
 
export default StudentForm;