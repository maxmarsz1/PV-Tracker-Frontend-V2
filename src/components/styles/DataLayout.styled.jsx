import styled from "styled-components";

export const DataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 30px;
  height: 80%;
  width: 90%;
  aspect-ratio: 16/9;
`;

export const DataLegend = styled.div`
  ul {
    list-style: none;
    display: flex;
  }

  ul li {
    margin: 0 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  li:before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
  }

  li:nth-child(1):before {
    background-color: ${({ theme }) => theme.mainColors.pink};
  }
  li:nth-child(2):before {
    background-color: ${({ theme }) => theme.mainColors.blue};
  }
  li:nth-child(3):before {
    background-color: ${({ theme }) => theme.mainColors.green};
  }
`;

export const DataInfo = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px inset;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    span {
      border-radius: 10px;
      aspect-ratio: 1;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 3px solid ${({ theme }) => theme.colors.text};
      cursor: pointer;
      transition: 0.3s all;
    }

    span:hover {
      border: 3px solid ${({ theme }) => theme.mainColors.pink};
    }

    img {
      width: 20px;
    }
  }

  div.info-container {
    display: flex;
    flex-direction: row;
    font-size: 0.5rem;
    height: 100%;

    div.titles,
    div.data {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: end;
    }

    div.titles {
      align-items: end;
      font-weight: bold;
    }
    div.data {
      align-items: start;
    }
  }
`;
