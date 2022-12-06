import styled from "styled-components";

export const DataWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 30px;
    width: 90%;
    aspect-ratio: 16/9;
    margin: 3rem;   

`

export const DataInfo = styled.div`
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px inset;
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .top-bar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        
        span{
            border-radius: 10px;
            aspect-ratio: 1;
            width: 35px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px solid ${({theme}) => theme.colors.text};
        }

        img{
            width: 20px;
        }
    }

    div.info-container{
        display: flex;
        flex-direction: row;
        font-size: .5rem;
        
        div.titles, div.data{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: end;
        }

        div.titles{
            align-items: end;
            font-weight: bold;
        }
        div.data{
            align-items: start;
        }
    }

`