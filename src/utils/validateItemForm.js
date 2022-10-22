export const validateItemForm = values => {
    const errors = {};

    if (!values.name) errors.name = 'Required'

    const regex = /(\d+)/g

    if (!values.price) errors.price = 'Required'
    if (!values.price.match(regex)) errors.price = 'Must be an integer'

    if (!values.inv) errors.inv = 'Required'
    if (!values.inv.match(regex)) errors.inv = 'Must be an integer'

    return errors
}