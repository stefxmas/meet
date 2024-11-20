import React, { useState, useEffect } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { x: 100, y: 200, z: 200 },
//   { x: 120, y: 100, z: 260 },
//   { x: 170, y: 300, z: 400 },
//   { x: 140, y: 250, z: 280 },
//   { x: 150, y: 400, z: 500 },
//   { x: 110, y: 280, z: 200 },
// ];

const CityEventsChart =({events, allLocations})=> {
// const demoUrl = 'https://codesandbox.io/p/sandbox/scatter-chart-simple-y4mg7g';

useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    const data = allLocations.map((location) => {
        const count = events.filter(
            (event) => event.location === location
        ).length;
        // const city = location.split(',')[0];
        const city = location.split((/, | - /))[0];
        return { city, count };
    });
    return data;
};
  const [data, setData] = useState([]);
//   const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="count" name="events" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );

}

export default CityEventsChart