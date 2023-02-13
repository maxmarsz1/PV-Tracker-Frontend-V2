import styled from "styled-components";

export const HomeContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  max-width: 1880px;
  max-height: 1000px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const DataContainer = styled.div`
  height: 100%;
  aspect-ratio: 16 / 9;
  display: grid;
  gap: 25px;
  padding: 0 2rem 2rem 2rem;
  margin: 0 auto;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const DataItem = styled.div`
  background-color: ${({ theme }) => theme.colors.background2};
  border-radius: 30px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 100;
  transition: 0.3s background ease;

  .greeting {
    font-size: 1.6rem;
    text-shadow: 1px 1px 5px ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.mainColors.pink};
  }

  hr {
    width: 70%;
    margin: 1rem 0;
    color: ${({ theme }) => theme.mainColors.pink};
  }

  span {
    font-size: 20px;
  }

  .header {
    font-weight: 400;
    padding: 0.5rem;
  }

  .info-title {
    margin: 0.5rem 0;
    max-width: 70%;
    text-align: center;
  }

  .info-data {
    color: ${({ theme }) => theme.mainColors.blue};
    font-size: 24px;
    max-width: 70%;
    text-align: center;
  }

  .info-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .column {
    flex-direction: column;
  }

  @media only screen and (max-width: 1600px) {
    .greeting {
      font-size: 20px;
    }
    span {
      font-size: 16px;
    }
    .info-data {
      font-size: 20px;
    }
  }
`;

export const MenuButton = styled(DataItem)`
  cursor: pointer;
  position: relative;

  &:hover {
    background: ${({ theme }) => theme.colors.menuHover};
  }

  img {
    height: 80px;
    margin-bottom: 1rem;
  }

  .menu-title {
    font-size: 20px;
  }
`;

export const DataItemBigMenu = styled(DataItem)`
  grid-column: 2 / span 3;
  grid-row: 1 / span 2;
`;

export const DataItemBig = styled(DataItem)`
  grid-column: 2 / span 3;
  grid-row: 1 / span 3;
`;

export const DataItemHuge = styled(DataItem)`
  grid-column: 1 / span 4;
  grid-row: 1 / span 3;
`;
