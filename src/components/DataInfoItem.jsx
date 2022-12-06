import { DataInfo } from "./styles/DataLayout.styled"
import ChartDark from './assets/icons/chart_dark.png';
import ChartLight from './assets/icons/chart_light.png';
import EditLight from './assets/icons/edit_light.png';
import EditDark from './assets/icons/edit_dark.png';
import { DarkTheme, LightTheme, mainColors } from "./themes/Theme";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const DataInfoItem = ({data, darkTheme}) => {
    const monthName = new Date(1, data.date-1).toLocaleString('pl-PL', {month: 'long'})
    const monthNameCapitalized = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    console.log(data)
    data = [data]
  return (
    <DataInfo>
        <div className="top-bar">
          <span><img src={darkTheme ? EditDark : EditLight} alt="" /></span>
          {monthName}
          <span><img src={darkTheme ? ChartDark : ChartLight} alt=""/></span>
        </div>
        <div className="info-container">
        <ResponsiveContainer height={100} width="100%">
                <BarChart data={data} layout="vertical" >
                  {/* <Legend verticalAlign="top" /> */}
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis hide type="number" stroke={darkTheme ? DarkTheme.colors.text : LightTheme.colors.text}/>
                  <YAxis hide type="category" dataKey="date" stroke={darkTheme ? DarkTheme.colors.text : LightTheme.colors.text}/>
                  <Bar dataKey='produced' name="Produkcja" fill={mainColors.pink} label={{ position: 'center', fontSize: 12 }}/>
                  <Bar dataKey='received' name="Pobrane (1.8.0)" fill={mainColors.blue} label={{ position: 'center', fontSize: 12  }}/>
                  <Bar dataKey='sent' name="Wysłane (2.8.0)" fill={mainColors.green} label={{ position: 'center', fontSize: 12  }}/>
                  <Tooltip contentStyle={{backgroundColor: 'rgba(0,0,0,0.8)'}} itemStyle={{backgroundColor: 'rgba(0,0,0,0.8)'}}/>
                </BarChart>
              </ResponsiveContainer>
        </div>
    </DataInfo>
  )
}

export default DataInfoItem