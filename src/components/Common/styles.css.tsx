import styled from 'styled-components'
import { Field, Form } from 'formik'

export const FForm = styled(Form)`
    display: flex;
    flex-direction: column;
`;

export const P = styled.p`
    font-family: ${({theme}) => theme.font.family.primary};
    color: ${({ theme }) => theme.color};
    font-size: ${({ theme }) => theme.font.size.m};
    line-height: 2; 
`;

export const H1 = styled.h1`
    font-family: ${({ theme }) => theme.font.family.primary};
    color: ${({ theme }) => theme.color};
    font-size:${({ theme }) => theme.font.size.l};
    font-weight: bold;
    margin: 20px 0;
`;

export const UL = styled.ul`
    list-style-type: circle;
    margin-left: 20px;
`;

export const LI = styled.li`
    font-family: ${({ theme }) => theme.font.family.primary};
    color: ${({ theme }) => theme.color};
    font-size:${({ theme }) => theme.font.size.m};
    line-height: 1;
    margin: 5px 0;
`;

export const FField = styled(Field)`
    margin: 5px 0 15px 0; 
    font-size:${({ theme }) => theme.font.size.m};
    padding: 4px;
    border: 1px solid ${({ theme }) => theme.backgroundColor === 'white' ? 'black' : 'white'};
`
export const Button = styled.button`
    color: ${({ theme }) => theme.backgroundColor};
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.m};
    font-weight: bold;
    letter-spacing: 2px;
    max-width: 200px;
    padding: 10px;
    margin: 20px 0;
    background-color: ${({ theme }) => theme.backgroundColor === 'white' ? 'black' : 'white'};
    &:hover{
        cursor: pointer;    
    }
`;