import React from 'react';
import { Heading } from '@chakra-ui/react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import gtFootballData from '../gt_football_data.json';

function OffenseTab() {
  return (
    <>
      <LineChart
        width={500}
        height={300}
        data={gtFootballData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="offYardsPerGame" stroke="#7fc97f" />
        <Line type="monotone" dataKey="passYardsPerGame" stroke="#386cb0" />
        <Line type="monotone" dataKey="rushingYardsPerGame" stroke="#fdc086" />
      </LineChart>
    </>
  );
};

export { OffenseTab };