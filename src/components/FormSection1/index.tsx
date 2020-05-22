import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikBag } from 'formik';

import { FormControls, FormError } from './styles.css'
import { P, H1, UL, LI, FField, FForm, Button } from '../Common/styles.css'

interface FormValues {
    email: string;
    password: string;
}

interface IFormValues {
    email?: string;
    password?: string;
    fullname?: string;
    age?: number;
}

interface FormSection1Props {
    initialEmail?: string;
    initialPassword?: string;
}

const FormValidationSchema = Yup.object().shape({
    email: Yup.string()
        .required('please enter an e-mail address.')
        .email(),
    password: Yup.string()
        .required('please enter your password')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            `Must Contain 8 Characters, one Uppercase \none Lowercase, One Number \nand one Special Case Character`
        )
});


const FormFields = (props: any & FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting, values } = props;
    
    return (
        <FForm>
            <H1>E-mail</H1>
            <P>Please enter an email address</P>
            <FField type="email" name="email" placeholder="example@domain.com" value={values.email}/>
            {touched.email && errors.email && <FormError>{errors.email}</FormError>}
            <H1>Password</H1>
            <P>Your password <em style={{fontStyle: 'italic'}}>must</em> have:</P>
            <UL>
                <LI>At least 8 characters</LI>
                <LI>One Uppercase</LI>
                <LI>One Lowercase</LI>
                <LI>One Number</LI>
                <LI>One Special Case Character</LI>
            </UL>
            <FField type="password" name="password" autoComplete="password"/>
            {touched.password && errors.password && <FormError>{errors.password}</FormError>}
            <FormControls>
                <Button style={{backgroundColor: 'mediumseagreen'}} type="submit" disabled={isSubmitting}> Next </Button>
            </FormControls>
        </FForm>
    );
};

const FormSection1 = withFormik<any | FormSection1Props, FormValues>({
    mapPropsToValues: props => {
        return {
            email: props.fv.email,
            password: props.fv.password,
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

export default FormSection1

