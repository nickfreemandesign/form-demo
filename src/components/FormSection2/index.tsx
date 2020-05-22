import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikBag } from 'formik';

import { FormControls, FormError } from './styles.css'
import { P, H1, FField, FForm, Button } from '../Common/styles.css'

interface FormValues {
    fullname: string;
    age: string;
}

interface FormSection2Props {
    fullname?: string;
    age?: string;
}

const FormValidationSchema = Yup.object().shape({
    fullname: Yup.string()
        .required("please enter your full name"),
    age: Yup.number()
        .min(2, "you must be at least 2 years old to register")
        .max(120, "you are too old to register")
});


const FormFields = (props: any & FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting, back, values } = props;
    return (
        <FForm>
            <H1>Full Name</H1>
            <P>Please enter your full name</P>
            <FField type="name" name="fullname" placeholder="John Doe" value={values.fullname}/>
            {touched.fullname && errors.fullname && <FormError>{errors.fullname}</FormError>}
            <H1>Age</H1>
            <FField type="age" name="age" />
            {touched.age && errors.age && <FormError>{errors.age}</FormError>}

            <FormControls>
                <Button type="button" onClick={back}> Back </Button>
                <Button style={{ backgroundColor: 'mediumseagreen' }} type="submit" disabled={isSubmitting}> Next </Button>
            </FormControls>
        </FForm>
    );
};

const FormSection2 = withFormik<any | FormSection2Props, FormValues>({
    mapPropsToValues: props => {
        return {
            fullname: props.fv.fullname,
            age: props.fv.age,
        };
    },
    validationSchema: FormValidationSchema,
    handleSubmit: (values: FormValues, formikBag: FormikBag<any, any>) => {
        formikBag.props.sfv({
            ...formikBag.props.fv,
            ...values
        })
    },
})(FormFields);

export default FormSection2

