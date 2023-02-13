import styled from "styled-components";

export const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -60px;
    scroll-snap-type: y mandatory;

    div{
        width: 100%;
        height: 100vh;
        border: 1px solid black;
        scroll-snap-align: start;
    }
`