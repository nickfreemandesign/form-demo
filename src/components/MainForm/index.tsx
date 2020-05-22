import React, { useState } from 'react';
import {FormContainer } from './styles.css'

import Loading from '../Loading'
import FormStart from '../FormStart'
import FormProgress from '../FormProgress'
import FormSection1 from '../FormSection1'
import FormSection2 from '../FormSection2'
import FormComplete from '../FormComplete'

interface IFormValues {
    email?: string;
    password?: string;
    fullname?: string;
    age?: number;
}

export const MainForm = () => {

    const [formValues, setFormValues] = useState<IFormValues>({
        email: '',
        password: '',
        fullname: '',
        age: 0
    }) 

    const [step, setStep] = useState<number>(0)

    const [isLoaded, setLoading] = useState<boolean>(false)

    const handleStepForward = (formValues?:any) => {
        if (formValues) setFormValues(formValues)
        setStep(step + 1)
    }

    const handleStepBack = () => {
        setStep(step - 1)
    }

    const handleSubmission = (formValues: any) => {
        handleStepForward(formValues)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    const resubmitForm = () => {
        setFormValues({
            email: '',
            password: '',
            fullname: '',
            age: 0
        })
        setStep(1)
    }

    return (
        <>
            {   isLoaded  ?
                    <Loading/>
                : <FormContainer>
                    {step > 0 && <FormProgress step={step}/>}
                    {step === 0 && <FormStart
                        sfv={handleStepForward} />}
                    {step === 1 && <FormSection1
                        fv={formValues}
                        sfv={handleStepForward} />}
                    {step === 2 && <FormSection2
                        fv={formValues}
                        back={handleStepBack}
                        sfv={handleSubmission} />}
                    {step === 3 && <FormComplete
                        resubmitForm={resubmitForm} />}
                  </FormContainer>
            }
        </>
    );
}


