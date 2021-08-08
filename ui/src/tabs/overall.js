import React from 'react';
import { Heading } from '@chakra-ui/react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import gtFootballData from '../gt_football_data.json';

function OverallTab() {
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
        <Line type="monotone" dataKey="win" stroke="#7fc97f" />
        <Line type="monotone" dataKey="pointsPerGame" stroke="#386cb0" />
        <Line type="monotone" dataKey="avgPointsPerGameAllowed" stroke="#f0027f" />
      </LineChart>
    </>
  );
};

export { OverallTab };