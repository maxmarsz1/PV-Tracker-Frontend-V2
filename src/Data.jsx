import { DataContainer, DataItemHuge, HomeContainer } from './components/styles/Layout.styled'
import { DataWrapper } from './components/styles/DataLayout.styled'
import DataInfoItem from './components/DataInfoItem'

const Data = ({darkTheme}) => {
  const data = [
    {
      date: 1,
      produced: 124,
      received: 123,
      sent: 123
    },
    {
      date: 2,
      produced: 123,
      received: 123,
      sent: 123
    },
    {
      date: 3,
      produced: 123,
      received: 123,
      sent: 123
    },
    {
      date: 4,
      produced: 123,
      received: 123,
      sent: 123
    },
    {
      date: 5,
      produced: 123,
      received: 123,
      sent: 123
    },
    {
      date: 6,
      produced: 123,
      received: 123,
      sent: 123
    },
    {
      date: 7,
      produced: 123,
      received: 123,
      sent: 123
    },
    {
      date: 8,
      produced: 123,
      received: 123,
      sent: 123
    },
    {
      date: 9,
      produced: 123,
      received: 234,
      sent: 69
    },
    {
      date: 10,
      produced: 123,
      received: 123,
      sent: 123
    },
    {
      date: 11,
      produced: 123,
      received: 123,
      sent: 123
    },
    {
      date: 12,
      produced: 123,
      received: 123,
      sent: 123
    },
  ]
  return (
    <HomeContainer>
      <DataContainer>
        <DataItemHuge>
          <DataWrapper>
            {
              data.map(item => <DataInfoItem key={item.date} darkTheme={darkTheme} data={item}/>)
            }
          </DataWrapper>
        </DataItemHuge>
      </DataContainer>
    </HomeContainer>
  )
}

export default Data