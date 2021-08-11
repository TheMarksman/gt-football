import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { Flex } from '@chakra-ui/react';

import gtFootballData from '../gt_football_data.json';

function DefenseTab() {
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
            <Line type="monotone" dataKey="yardsPerGameAllowed"  name="Total Yards/Game" stroke="#f0027f" />
            <Line type="monotone" dataKey="passYardsPerGameAllowed" name="Pass Yards/Game" stroke="#386cb0" />
            <Line type="monotone" dataKey="rushYardsPerGameAllowed" name="Rush Yards/Game" stroke="#fdc086" />
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
            <Line type="monotone" dataKey="defRank" name="Overall Rank" stroke="#7fc97f" />
            <Line type="monotone" dataKey="passDefRank" name="Passing Rank" stroke="#386cb0" />
            <Line type="monotone" dataKey="rushingDefRank"  name="Rushing Rank" stroke="#fdc086" />
            <Line type="monotone" dataKey="sackRank"  name="Sack Rank" stroke="#f0027f" />
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
            <Line type="monotone" dataKey="tackleForLossPerGame" name="Tackle For Loss/Game" stroke="#7fc97f" />
            <Line type="monotone" dataKey="tackleForLossRank" name="Tackle For Loss Rank" stroke="#386cb0" />
          </LineChart>
      </Flex>
    </>
  );
};

export { DefenseTab };