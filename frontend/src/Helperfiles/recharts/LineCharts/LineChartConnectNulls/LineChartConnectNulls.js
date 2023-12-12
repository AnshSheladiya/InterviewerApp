import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const LineChartConnectNulls = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line connectNulls={false} type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartConnectNulls;
