export const validate = (values) => {
    const errors = {};

    if (!values.first_name) {
        errors.first_name = 'Required';
    } else if (values.first_name.length > 20) {
        errors.first_name = 'Must be 20 characters or less';
    }

    if (!values.last_name) {
        errors.last_name = 'Required';
    } else if (values.last_name.length > 20) {
        errors.last_name = 'Must be 20 characters or less';
    }

    if (!values.occupation) {
        errors.occupation = 'Required';
    } else if (values.occupation.length > 20) {
        errors.occupation = 'Must be 20 characters or less';
    }
    if (!values.role) {
        errors.role = 'Required';
    } else if (values.role.length > 20) {
        errors.role = 'Role required';
    }
    if (!values.phone) {
        errors.phone = 'Required';
    } else if (values.phone.length < 10) {
        errors.phone = 'Must be min 10 characters';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length !== 8) {
        errors.password = 'Must be 8 characters';
    }

    return errors;
};