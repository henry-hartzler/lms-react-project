import { useState } from "react";
import { useDispatch } from "react-redux";  
import { Button, Modal, ModalBody, ModalHeader, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { addStudent } from "./studentsSlice";
import sparky from '../../app/assets/img/starky-sm.svg';
import piceratops from '../../app/assets/img/piceratops-sm.svg';
import { validateStudentForm } from "../../utils/validateStudentForm";

const StudentForm = ({ studentId }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = values => {
        const student = {
            studentId: parseInt(studentId),
            name: values.name,
            img: values.img,
            points: 0
        }
        dispatch(addStudent(student))
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
                            name: '',
                            img: undefined
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
                            <FormGroup>
                                <Label htmlFor="img">
                                    Avatar
                                </Label>
                                <Field
                                    name='img'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option value={sparky}>Sparky</option>
                                    <option value={piceratops}>Piceratops</option>
                                </Field>
                                <ErrorMessage name='img'>
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