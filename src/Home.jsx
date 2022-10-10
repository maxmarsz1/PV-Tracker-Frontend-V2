import { useState } from "react";
import { DataContainer, DataItem, HomeContainer } from "./components/styles/Home.styled"

import { PieChart, Pie, Cell, BarChart, XAxis, YAxis, Bar, CartesianGrid, Tooltip } from "recharts";

const Home = () => {
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

    const colors = [
        '#56E7C1',
        '#4F9CFE',
        '#F054AA'
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
                                <Cell key={`cell-${index}`} fill={colors[index]} />
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
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey='uv'  fill={colors[2]}/>
                    <Tooltip/>
                </BarChart>
            </DataItem>
        </DataContainer>
    </HomeContainer>
  )
}

export default Home