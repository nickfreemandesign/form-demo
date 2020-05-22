import React from 'react';
import { FormCompleteContainer } from './styles.css'
import { P, H1, Button } from '../Common/styles.css'

function FormComplete({resubmitForm}:any) {

    return (
        <FormCompleteContainer>
            <H1>Complete !</H1>
            <P>Your form has been submitted. You may close your browser window or </P>
            <P>submit another form by clicking the button below.</P>
            <Button type="button" onClick={resubmitForm}>
                Submit Again
            </Button>
        </FormCompleteContainer>
    );
}

export default FormComplete;
