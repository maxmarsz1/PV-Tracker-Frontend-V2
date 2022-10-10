import styled from "styled-components";

export const SidebarContainer = styled.div`
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.text};
    box-shadow: 0 0 5px black;
    height: 100%;
    width: 300px;
    position: absolute;
    left: 0;
    top: 0;
    
    div{
        width: 100%;
        padding: 1rem;
        cursor: pointer;
        transition: .3s all ease;
        user-select: none;
    }

    div:hover{
        background-color: ${({theme}) => theme.colors.hover};
    }
`