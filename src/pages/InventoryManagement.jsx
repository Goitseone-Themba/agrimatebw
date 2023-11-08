import React, { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Button, Stack } from '@mui/material'
import './CSS/InventoryManagement.css'
import InventoryList from './Inventory/InventoryList';


export const InventoryManagement = () => {

  return (
    <div>
      <Box height={70}/>
      <Box sx={{display: 'flex'}}>
      <Box width={30}/>
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <InventoryList />
    </Box>
      </Box>
    </div>
  );
};
