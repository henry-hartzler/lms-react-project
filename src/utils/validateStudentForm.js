export const validateStudentForm = values => {
    const errors = {};

    if (!values.name) errors.name = 'Required'

    return errors
}