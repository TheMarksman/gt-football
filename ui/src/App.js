import './App.css';
import gtFootballData from './gt_football_data.json';
import { Container, Box, Flex, Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import { OverallTab } from './tabs/overall'; 
import { OffenseTab } from './tabs/offense';
import { DefenseTab } from './tabs/defense';

function App() {
  console.log(gtFootballData);

  return (
    <Container className={'App'} maxW={'x1'}>
      <Heading>Georgia Tech Football Statistics</Heading>
      <Flex>
        <Box py={'6'}>
          <Tabs variant={'soft-rounded'} colorScheme={'yellow'}>
            <TabList>
              <Tab>Overall</Tab>
              <Tab>Offense</Tab>
              <Tab>Defense</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <OverallTab />
              </TabPanel>

              <TabPanel>
                <OffenseTab />
              </TabPanel>

              <TabPanel>
                <DefenseTab />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
