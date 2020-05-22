import styled from 'styled-components'
import { Button } from '../Common/styles.css'

export const AppContainer = styled.div`
    color: ${({ theme }) => theme.color};
    background-color: ${({theme}) => theme.backgroundColor};
    height: 100vh;
    width: 100vw;
`;

export const AppContent = styled.div`
    color: ${({ theme }) => theme.color};
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const ThemeButton = styled(Button)`
    color: ${({ theme }) => theme.color === 'black' ? 'white' : 'black'};
    width: 100px;
    padding: 10px;
    margin: 20px;
    right: 0;
    position: absolute;
    background-color: ${({ theme }) => theme.backgroundColor === 'white' ? 'black' : 'white'};
`;

