import styled from "styled-components";

export const NavbarContainer = styled.div`
    min-width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;

    img {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    span {
        font-size: 1.4rem;
        font-weight: 100;
        letter-spacing: 4px;
    }
`