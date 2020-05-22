import styled from 'styled-components'

export const FormContainer = styled.div`
    border: 1px solid ${({ theme }: any) => theme.backgroundColor === 'white' ? 'black' : 'white'};
    padding: 20px;
    border-radius: 5px;
`
