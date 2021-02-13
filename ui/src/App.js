import './App.css';
import gtFootballData from './gt_football_data.json';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Container, Box, Flex, Heading } from '@chakra-ui/react';

function App() {
  console.log(gtFootballData);

  return (
    <Container className="App" maxW="xl" centerContent>
      <Flex>
        <Box padding="4">
          <Heading>Overall</Heading>
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
        </Box>

        <Box padding="4">
          <Heading>Offense</Heading>
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
        </Box>

        <Box padding="4">
          <Heading>Defense</Heading>
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
            <Line type="monotone" dataKey="yardsPerGameAllowed" stroke="#f0027f" />
            <Line type="monotone" dataKey="passYardsPerGameAllowed" stroke="#386cb0" />
            <Line type="monotone" dataKey="rushYardsPerGameAllowed" stroke="#fdc086" />
          </LineChart>
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
