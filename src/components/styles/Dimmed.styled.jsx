import styled from "styled-components";

export const DimmedContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
`