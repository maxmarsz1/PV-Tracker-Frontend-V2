import { useState } from "react";
import { DataContainer, DataItem, HomeContainer } from "./components/styles/Home.styled"
import { DarkTheme, LightTheme, mainColors } from "./components/themes/Theme";

import { PieChart, Pie, Cell, BarChart, XAxis, YAxis, Bar, CartesianGrid, Tooltip, Legend } from "recharts";

const Home = ({darkTheme}) => {
    const [date, setDate] = useState(new Date());
    setTimeout(() => {
        setDate(new Date());
    }, 1000)

    const data01 = [
        {
          "name": "Group A",
          "value": 67
        },
        {
          "name": "Group B",
          "value": 33
        }
    ];

    const years_data = [
        {
          "name": "2017",
          "uv": 0.98
        },
        {
          "name": "2018",
          "uv": 0.95
        },
        {
          "name": "2019",
          "uv": 0.91
        },
        {
          "name": "2020",
          "uv": 0.93
        },
        {
          "name": "2021",
          "uv": 0.89
        }
      ];

      const big_data = [
        {
          "date": "2017",
          "produced": 134,
          "received": 132,
          "sent": 80
        },
        {
          "date": "2018",
          "produced": 342,
          "received": 142,
          "sent": 156
        },
        {
          "date": "2019",
          "produced": 456,
          "received": 89,
          "sent": 234
        },
        {
          "date": "2020",
          "produced": 809,
          "received": 154,
          "sent": 325
        },
        {
          "date": "2021",
          "produced": 789,
          "received": 213,
          "sent": 233
        },
        {
          "date": "2022",
          "produced": 1209,
          "received": 156,
          "sent": 455
        }
      ];

  return (
    <HomeContainer>
        <DataContainer>
            <DataItem first={true}>
                <span className="greeting">Witaj PIayer69</span>
                <hr />
                <span className="date">{date.toISOString().slice(0, 10)}</span>
                <span className="time">{date.toISOString().slice(11, 19)}</span>
            </DataItem>
            <DataItem big={true}>
                <BarChart data={big_data} width={1000} height={500}>
                  <Legend verticalAlign="top" />
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" stroke={darkTheme ? DarkTheme.colors.text : LightTheme.colors.text}/>
                  <YAxis stroke={darkTheme ? DarkTheme.colors.text : LightTheme.colors.text}/>
                  <Bar dataKey='produced' name="Produkcja" fill={mainColors.pink}/>
                  <Bar dataKey='received' name="Pobrane (1.8.0)" fill={mainColors.blue}/>
                  <Bar dataKey='sent' name="Wysłane (2.8.0)" fill={mainColors.green}/>
                  <Tooltip contentStyle={{backgroundColor: 'rgba(0,0,0,0.8)'}} itemStyle={{backgroundColor: 'rgba(0,0,0,0.8)'}}/>
                </BarChart>
            </DataItem>
            <DataItem>
                <span className="header">styczeń - czerwiec 2022</span>
                <span className="info-title">Odłożona energia:</span>
                <span className="info-data">-168,5 kWh</span>
                <span className="info-title">Kwota do zapłaty:</span>
                <span className="info-data">134,80 zł</span>
            </DataItem>
            <DataItem>
                <span className="info-title">Średnie dzienne zużycie:</span>
                <span className="info-data">12,3 kWh</span>
                <span className="info-title">Średnie dzienne zużycie w okresie:</span>
                <span className="info-data">14,1 kWh</span>
            </DataItem>
            <DataItem>
                <span className="info-title">Procent autokonsumpcji</span>
                <div className="info-container">
                    <PieChart width={150} height={150}>
                        <Pie dataKey='value' nameKey='name' data={data01} startAngle={270} endAngle={-270} cx='50%' cy='50%'>
                            {data01.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={Object.values(mainColors)[index]} />
                            ))}
                        </Pie>
                    </PieChart>
                    <span className="info-data">33%</span>
                </div>
            </DataItem>
            <DataItem>
                <span className="info-title">Zaoszczędzone środki:</span>
                <span className="info-data">5 643,22 zł</span>
                <span className="info-title">Zaoszczędzone środki w okresie:</span>
                <span className="info-data">1 908,99 zł</span>
            </DataItem>
            <DataItem>
                <BarChart data={years_data} width={330} height={150}>
                    <CartesianGrid strokeDasharray="" />
                    <XAxis dataKey="name" stroke={darkTheme ? DarkTheme.colors.text : LightTheme.colors.text}/>
                    <YAxis domain={[.8, 1]} stroke={darkTheme ? DarkTheme.colors.text : LightTheme.colors.text}/>
                    <Bar dataKey='uv'  fill={mainColors.pink}/>
                    <Tooltip/>
                </BarChart>
            </DataItem>
        </DataContainer>
    </HomeContainer>
  )
}

export default Home