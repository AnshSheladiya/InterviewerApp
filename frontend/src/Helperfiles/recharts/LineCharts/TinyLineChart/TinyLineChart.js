// TinyLineChart.js
import React from 'react';
import {
  LineChart,
  Line,
} from 'recharts';

function TinyLineChart({data}) {

  return (
      <LineChart width={500} height={300} data={data} background="#201D47">
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
  );
}

export default TinyLineChart;
