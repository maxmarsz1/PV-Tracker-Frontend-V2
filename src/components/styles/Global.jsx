import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Century Gothic', sans-serif;
    }


    html, body, #root {
        height: 100vh;
        background-color: ${({theme}) => theme.colors.background};
    }
`

export default GlobalStyles;