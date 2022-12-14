import { useState } from "react";
import { useDispatch } from "react-redux";  
import { Button, Modal, ModalBody, ModalHeader, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { addItem } from "./itemSlice";
import { validateItemForm } from "../../utils/validateItemForm";
import star from '../../app/assets/img/star-icon.svg';
import store from '../../app/assets/img/store.png';

const ItemForm = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = values => {
        const item = {
            name: values.name,
            price: values.price,
            inv: values.inv,
            //eventually make an option list so that the img reflects the prize (XP, Avatar, Prize, etc)
            img: values.img
        }
        dispatch(addItem(item))
        setModalOpen(false)
    }

    return (
        <>
            <Button size="lg" outline color="success" onClick={() => setModalOpen(true)}>
                <i className="fa-solid fa-plus"></i> Add Item
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>Add Item</ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            name: '',
                            price: '',
                            inv: ''
                        }}
                        onSubmit={handleSubmit}
                        validate={validateItemForm}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor="name">
                                    Name
                                </Label>
                                <Field
                                    name='name'
                                    placeholder='Item name'
                                    className='form-control'
                                />
                                <ErrorMessage name='name'>
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="price">
                                    Price ($)
                                </Label>
                                <Field
                                    name='price'
                                    placeholder='Price'
                                    className='form-control'
                                />
                                <ErrorMessage name='price'>
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="inv">
                                    Inventory (#)
                                </Label>
                                <Field
                                    name='inv'
                                    placeholder='Number of inventory'
                                    className='form-control'
                                />
                                <ErrorMessage name='inv'>
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="img">
                                    Reward Type
                                </Label>
                                <Field
                                        name='img'
                                        as='select'
                                        className='form-control'
                                    >
                                        <option>Select...</option>
                                        <option value={star}>Online</option>
                                        <option value={store}>In-person</option>
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
 
export default ItemForm;