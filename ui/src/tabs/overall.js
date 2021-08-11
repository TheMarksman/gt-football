import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Flex } from '@chakra-ui/react';

import gtFootballData from '../gt_football_data.json';

function OverallTab() {
  return (
    <>
      <Flex>
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
          <Line type="monotone" dataKey="win" name="Win" stroke="#7fc97f" />
          <Line type="monotone" dataKey="pointsPerGame" name="Points/Game" stroke="#386cb0" />
          <Line type="monotone" dataKey="avgPointsPerGameAllowed" name="Points/Game Allowed" stroke="#f0027f" />
        </LineChart>

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
          <Line type="monotone" dataKey="defRank" name="Defensive Rank" stroke="#fdc086" />
          <Line type="monotone" dataKey="offRank" name="Offensive Rank" stroke="#386cb0" />
        </LineChart>

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
          <Line type="monotone" dataKey="penalties" name="Penalties" stroke="#fdc086" />
          <Line type="monotone" dataKey="penaltyRank" name="Penalty Rank" stroke="#386cb0" />
          <Line type="monotone" dataKey="penaltyYardsPerGame" name="Penalty Yards/Game" stroke="#f0027f" />
        </LineChart>
      </Flex>
    </>
  );
};

export { OverallTab };