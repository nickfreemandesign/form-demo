import React from 'react';
import { LoadingContainer, LoadingIcon } from './styles.css'
import { H1 } from '../Common/styles.css'

function Loading() {

    return (
        <LoadingContainer>
            <LoadingIcon width="100" height="100" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" style={{ fillRule: 'evenodd' }}>
                    <g transform="translate(1 1)" style={{ strokeWidth: 2}}>
                        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                        <path d="M36 18c0-9.94-8.06-18-18-18">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 18 18"
                                to="360 18 18"
                                dur="1s"
                                repeatCount="indefinite" />
                        </path>
                    </g>
                </g>
            </LoadingIcon>
            <br/>
            <H1>Submitting your form, please wait...</H1>
        </LoadingContainer>
    );
}

export default Loading;
