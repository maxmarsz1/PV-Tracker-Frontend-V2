import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.text};
    width: 100%;
    height: 100%;
`