import {
  DataContainer,
  DataItemHuge,
  HomeContainer,
} from "./components/styles/Layout.styled";
import { DataWrapper } from "./components/styles/DataLayout.styled";
import DataInfoItem from "./components/DataInfoItem";

const Data = ({ darkTheme }) => {
  const data = [
    {
      date: 1,
      produced: Math.floor(Math.random() * 1000),
      received: Math.floor(Math.random() * 1000),
      sent: Math.floor(Math.random() * 1000),
    },
    {
      date: 2,
      produced: Math.floor(Math.random() * 1000),
      received: Math.floor(Math.random() * 1000),
      sent: Math.floor(Math.random() * 1000),
    },
    {
      date: 3,
      produced: Math.floor(Math.random() * 1000),
      received: Math.floor(Math.random() * 1000),
      sent: Math.floor(Math.random() * 1000),
    },
    {
      date: 4,
      produced: Math.floor(Math.random() * 1000),
      received: Math.floor(Math.random() * 1000),
      sent: Math.floor(Math.random() * 1000),
    },
    {
      date: 5,
      produced: Math.floor(Math.random() * 1000),
      received: Math.floor(Math.random() * 1000),
      sent: Math.floor(Math.random() * 1000),
    },
    {
      date: 6,
      produced: Math.floor(Math.random() * 1000),
      received: Math.floor(Math.random() * 1000),
      sent: Math.floor(Math.random() * 1000),
    },
    {
      date: 7,
      produced: Math.floor(Math.random() * 1000),
      received: Math.floor(Math.random() * 1000),
      sent: Math.floor(Math.random() * 1000),
    },
    {
      date: 8,
      produced: Math.floor(Math.random() * 1000),
      received: Math.floor(Math.random() * 1000),
      sent: Math.floor(Math.random() * 1000),
    },
    {
      date: 9,
      produced: Math.floor(Math.random() * 1000),
      received: Math.floor(Math.random() * 1000),
      sent: Math.floor(Math.random() * 1000),
    },
    {
      date: 10,
      produced: Math.floor(Math.random() * 1000),
      received: Math.floor(Math.random() * 1000),
      sent: Math.floor(Math.random() * 1000),
    },
    {
      date: 11,
      produced: Math.floor(Math.random() * 1000),
      received: Math.floor(Math.random() * 1000),
      sent: Math.floor(Math.random() * 1000),
    },
    {
      date: 12,
      produced: Math.floor(Math.random() * 1000),
      received: Math.floor(Math.random() * 1000),
      sent: Math.floor(Math.random() * 1000),
    },
  ];
  return (
    <HomeContainer>
      <DataContainer>
        <DataItemHuge>
          <DataWrapper>
            {data.map((item) => (
              <DataInfoItem key={item.date} darkTheme={darkTheme} data={item} />
            ))}
          </DataWrapper>
        </DataItemHuge>
      </DataContainer>
    </HomeContainer>
  );
};

export default Data;
