import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Chart } from "react-google-charts";

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

export const InventorySummary = () => {
  return (
    <div>
    <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ minWidth: 480 }}>
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
              
              </Grid>
            </Grid>


    </div>
  )
}
