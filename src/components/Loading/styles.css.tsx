import styled from 'styled-components';



export const LoadingContainer = styled.div`
    text-align: center;
`;

export const LoadingIcon = styled.svg`
    stroke: ${({ theme }: any) => theme.backgroundColor === 'white' ? 'black' : 'white'};
`;