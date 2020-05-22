import React from 'react';
import { ProgressContainer, ProgressSection } from './styles.css'

function FormProgress({step}:any) {
    const stepOneComplete = step === 1 ? "goldenrod" : (step > 1) ? 'green' : 'grey'
    const stepTwoComplete = step === 2 ? "goldenrod" : (step > 2) ? 'green' : 'grey'

    return (
            <ProgressContainer>
                <ProgressSection>
                    <svg width="50" height="50" viewBox="0 0 250 250">
                        <circle cx="125" cy="125" r="100" fill={stepOneComplete} />
                        <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="100px" fontFamily="Arial" dy=".3em">1</text>
                        Step 1 Indicator
                    </svg>
                </ProgressSection>
                <ProgressSection>
                    <svg width="50" height="50" viewBox="0 0 250 250">
                        <circle cx="125" cy="125" r="100" fill={stepTwoComplete} />
                        <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="100px" fontFamily="Arial" dy=".3em">2</text>
                        Step 2 Indicator
                    </svg>
                </ProgressSection>
            </ProgressContainer>
    );
}

export default FormProgress;
