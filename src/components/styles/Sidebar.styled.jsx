import styled from "styled-components";

export const SidebarContainer = styled.div`
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.text};
    box-shadow: 0 0 15px black;
    height: 100%;
    width: 300px;
    position: absolute;
    left: 0;
    top: 0;
    
    div{
        width: 100%;
        padding: 1rem;
        border-bottom: 1px solid black;
    }
`