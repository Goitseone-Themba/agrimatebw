import React, { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import './CSS/Dashboard.css'
import { AnimalSummary } from './Dashboard/AnimalSummary'
import { CropSummary } from './Dashboard/CropSummary'
import { InventorySummary } from './Dashboard/InventorySummary'

import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export const Dashboard = () => {

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<>
<Box height={70}/>
  <div class='box'>
      
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
              <Tab label="Crops" value="1" />
              <Tab label="Animals" value="2" />
              <Tab label="Inventory" value="3" />
            </TabList>
          </Box>

          <TabPanel value="1">

            <CropSummary />

          </TabPanel>
          <TabPanel value="2">

            <AnimalSummary />

          </TabPanel>
          <TabPanel value="3">

            <InventorySummary />
            
          </TabPanel>
        </TabContext>
      </Box>
      </div>

  </>    
  )
}

