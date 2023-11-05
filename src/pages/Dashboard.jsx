import React from 'react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const Dashboard = () => {
  return (<>
  <h1>Dashboard</h1>
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          


          <h1>Inventory summary</h1>
          


        </Grid>
        <Grid item xs={4}>


          <h1>Animal Summary</h1>


        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}>


          <h1>Crop Summary</h1>



        </Grid>
      </Grid>
    </Box>
  </>    
  )
}

