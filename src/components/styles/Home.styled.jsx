import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.background};
    padding: .5rem;
`

export const DataContainer = styled.div`
    width: fit-content;
    height: 100%;
    background-color: ${({theme}) => theme.colors.background};
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 40px;
`

export const DataItem = styled.div`
    height: ${({big}) => big ? '540px' : '250px'};
    width: ${({big}) => big ? '1130px' : '350px'};
    grid-column: ${({big}) => big ? '2 / span 3' : ''};
    grid-row: ${({big}) => big ? '1 / span 2' : ''};
    background-color: ${({theme}) => theme.colors.background2};
    border-radius: 30px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.16);

`