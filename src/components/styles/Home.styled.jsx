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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 100;

    .greeting{
        font-size: 1.6rem;
        text-shadow: 1px 1px 5px ${({theme}) => theme.colors.background};
        color: ${({theme}) => theme.mainColors.pink};
    }

    hr{
        width: 70%;
        margin: 1rem 0;
        color: ${({theme}) => theme.mainColors.pink};
    }

    span{
        font-size: 20px;
    }

    .header{
        font-weight: 400;
        margin-bottom: 2rem;
    }

    .info-title{
        margin: .5rem 0;
        max-width: 70%;
        text-align: center;
    }

    .info-data{
        color: ${({theme}) => theme.mainColors.blue};
        font-size: 24px;
        max-width: 70%;
        text-align: center;
    }

    .info-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`