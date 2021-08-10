import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { Heading } from '@chakra-ui/react';

import gtFootballData from '../gt_football_data.json';

function DefenseTab() {
  return (
    <>
      <Heading as={'h2'} size={'3x1'}>Yards/Game Allowed</Heading>
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
        <Line type="monotone" dataKey="yardsPerGameAllowed"  name="Total Yards/Game" stroke="#f0027f" />
        <Line type="monotone" dataKey="passYardsPerGameAllowed" name="Pass Yards/Game" stroke="#386cb0" />
        <Line type="monotone" dataKey="rushYardsPerGameAllowed" name="Rush Yards/Game" stroke="#fdc086" />
      </LineChart>
    </>
  );
};

export { DefenseTab };