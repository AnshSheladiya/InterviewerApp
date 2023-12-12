import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CenterScreen from '../styled-components/CenterScreen';
import TitleComponent from '../styled-components/TitleComponent';
function TabComponent() {
  return (
    <>
    <CenterScreen>
      <TitleComponent>React-tabs</TitleComponent>
    </CenterScreen>
        <Tabs>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>
      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
    </>

  );
}

export default TabComponent;
