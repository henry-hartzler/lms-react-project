export const validateStudentForm = values => {
    const errors = {};

    if (!values.name) errors.name = 'Required'

    if (!values.img) errors.img = 'Required'

    return errors
}