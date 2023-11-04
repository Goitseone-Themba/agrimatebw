import React, { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/material';

export const InventoryManagement = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1>Inventory</h1>
      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              aria-label="Tabs example"
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Equipments" value="1" />
              <Tab label="Fuel" value="2" />
              <Tab label="Fertilisers" value="3" />
              <Tab label="Seeds" value="4" />
              <Tab label="Animal Feeds" value="5" />
              <Tab label="Pesticides" value="6" />
              <Tab label="Vaccines" value="7" />
            </TabList>
          </Box>
          <TabPanel value="1">Content for Equipments</TabPanel>
          <TabPanel value="2">Content for Fuel</TabPanel>
          <TabPanel value="3">Content for Fertilisers</TabPanel>
          <TabPanel value="4">Content for Seeds</TabPanel>
          <TabPanel value="5">Content for Animal Feeds</TabPanel>
          <TabPanel value="6">Content for Pesticides</TabPanel>
          <TabPanel value="7">Content for Vaccines</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};



