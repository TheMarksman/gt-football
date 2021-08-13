import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Flex } from '@chakra-ui/react';

import gtFootballData from '../gt_football_data.json';

function OffenseTab() {
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
          <Line type="monotone" dataKey="offYardsPerGame" name="Total Yards/Game" stroke="#7fc97f" />
          <Line type="monotone" dataKey="passYardsPerGame" name="Pass Yards/Game" stroke="#386cb0" />
          <Line type="monotone" dataKey="rushingYardsPerGame"  name="Rush Yards/Game" stroke="#fdc086" />
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
          <Line type="monotone" dataKey="offRank" name="Overall Rank" stroke="#7fc97f" />
          <Line type="monotone" dataKey="passingOffRank" name="Passing Rank" stroke="#386cb0" />
          <Line type="monotone" dataKey="rushingOffRank"  name="Rushing Rank" stroke="#fdc086" />
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
          <Line type="monotone" dataKey="x3rdPercent" name="3rd Down Conversion" stroke="#7fc97f" />
          <Line type="monotone" dataKey="x4thPercent" name="4th Down Conversion" stroke="#386cb0" />
        </LineChart>
      </Flex>
    </>
  );
};

export { OffenseTab };