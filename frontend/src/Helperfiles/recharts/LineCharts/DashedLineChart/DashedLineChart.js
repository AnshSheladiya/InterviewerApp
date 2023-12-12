import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function DashedLineChart({ data }) {
  // You can initialize any state variables here using useState if needed

  useEffect(() => {
    // You can perform any side effects or lifecycle logic here
    // For example, you can fetch data or update state when props change
  }, [data]); // Add any dependencies that should trigger this effect

  return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
      </LineChart>
  );
}

export default DashedLineChart;
