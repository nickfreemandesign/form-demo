import React from 'react';
import { FormStartContainer, StartButton } from './styles.css'
import { P, H1 } from '../Common/styles.css'


const FormStart = ({sfv}:any) => {

    return (
      <FormStartContainer>
          <H1>Welcome! You are about to fill out a form</H1>
          <P>This form will guide you through a multi-step process</P>
          <P>When you are ready, click the "Start" button to begin</P>
        <StartButton 
            type="button"
            onClick={() => sfv()}>
                Start
        </StartButton>
      </FormStartContainer>
    );
}

export default FormStart