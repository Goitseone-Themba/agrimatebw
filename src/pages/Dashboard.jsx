import React from 'react';
import './CSS/Dashboard.css';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Chart } from "react-google-charts";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const data = [
  ["Crop Stage", "Days to Complete"],
  ["Planting", 11],
  ["Germination", 2],
  ["Vegetative Growth", 20],
  ["Flowering", 15],
  ["Fruiting", 10],
  ["Harvest", 7],
];

export const options = {
  title: "Crop Monitoring",
  pieHole: 0.4,
  is3D: false,
};

export const dataBarChart = [
  ["Year", "Cattle", "Poultry", "Sheep"],
  ["2015", 500, 2000, 100],
  ["2016", 550, 2500, 110],
  ["2017", 600, 3000, 120],
  ["2018", 650, 3500, 130],
  ["2019", 700, 4000, 140],
];

export const optionsBarChart = {
  chart: {
    title: "Animal Inventory",
    subtitle: "Year, Cattle, Poultry, and Sheep: 2015-2019",
  }
};
export const dataBarChart2 = [
  ["Year", "Seeds", "Fertilizers", "Crops Harvested"],
  ["2015", 5000, 2000, 10000],
  ["2016", 5500, 2500, 11000],
  ["2017", 6000, 3000, 12000],
  ["2018", 6500, 3500, 13000],
  ["2019", 7000, 4000, 14000],
];

export const optionsBarChart2 = {
  chart: {
    title: "Agriculture Farming Inventory",
    subtitle: "Year, Seeds, Fertilizers, and Crops Harvested: 2015-2019",
  }
};

export const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Box sx={{ flexGrow: 1, paddingLeft: '10px' }}>
        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h4" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Inventory Summary
                  </Typography>
                  <Typography variant="h5" component="div">
                    {bull}be{bull}nev{bull}o{bull}lent
                  </Typography>
                </CardContent>
                <CardContent>
                  <Chart
                    chartType="Bar"
                    width="100%"
                    height="400px"
                    data={dataBarChart2}
                    options={optionsBarChart2}
                  />
                </CardContent>
                <CardActions>
                  <Stack direction="row-reverse">
                    <Button size="small">Learn More</Button>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h4" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Animal Summary
                  </Typography>
                  <Typography variant="h5" component="div">
                    {bull}be{bull}nev{bull}o{bull}lent
                  </Typography>
                </CardContent>
                <Chart
                  chartType="Bar"
                  width="100%"
                  height="400px"
                  data={dataBarChart}
                  options={optionsBarChart}
                />
                <CardActions>
                  <Stack direction="row-reverse">
                    <Button size="small">Learn More</Button>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                  />
                </CardContent>
                <CardActions>
                  <Stack direction="row-reverse">
                    <Button size="small">Learn More</Button>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                </CardContent>
                <CardActions>
                  <Stack direction="row-reverse">
                    <Button size="small">Learn More</Button>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};
