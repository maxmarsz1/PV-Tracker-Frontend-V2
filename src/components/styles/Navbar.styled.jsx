import styled from "styled-components";

export const NavbarContainer = styled.div`
    min-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 60px;

    img {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    .burger-menu{
        display: none;
    }

    .links{
        display: flex;

    }

    .links ul{
        list-style: none;
        display: flex;
    }

    .links ul li{
        margin: 0 .8rem;
        padding: .3rem 2rem;
        text-align: center;
        border-radius: 50px;
        transition: .3s background ease;
        cursor: pointer;
        color: ${({theme}) => theme.colors.text};
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${({theme}) => theme.colors.hover};
    }

    .links ul li:hover{
        background-color: ${({theme}) => theme.colors.hover};
    }

    .logo {
        font-size: 1.4rem;
        font-weight: 100;
        letter-spacing: 4px;
        cursor: pointer;
        user-select: none;
    }
`