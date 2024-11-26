import React from 'react';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
  
    useEffect(() => {
      setData(getData());
    }, [`${events}`]);

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) => event.summary.includes(genre));
      return {
        name: genre,
        value: filteredEvents.length
      };
    });
    return data;
  };




const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
    x={x} 
    y={y} 
    fill="white" 
    textAnchor={x > cx ? 'start' : 'end'} 
    dominantBaseline="central">
      
      {`${(percent * 100).toFixed(0)}%`}
    
    </text>
  );
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// export default class Example extends PureComponent {
// //   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

//   render() {
    return (
      <ResponsiveContainer width="99%" height={400}>
        <PieChart width={400} height={400}>
          <Pie
           data={data}
           dataKey="value"
           fill="#8884d8"
           labelLine={false}
           label
           outerRadius={130}  
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend 
          align="center" 
          verticalAlign="bottom" 
          layout="horizontal" 
          height={2} 
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }



export default EventGenresChart;