import baseStyled, { ThemedStyledInterface } from 'styled-components';

const common = {
    font: {
        size: {
            s: '.5rem',
            m: '.8rem',
            l: '1.5rem',
            xl: '2rem'
        },
        family: {
            primary: 'Helvetica',
        },
    },
    form: {
        error: 'red',
    }
}

const light = {
    color: "black",
    backgroundColor: 'white',
    ...common
}

const dark = {
    color: "white",
    backgroundColor: 'black',
    ...common
}

export const themes = {
    light: {...light},
    dark: {...dark}
};

export type Themes = typeof themes;
export const styled = baseStyled as ThemedStyledInterface<Themes>;