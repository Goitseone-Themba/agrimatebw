import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Chart } from "react-google-charts";

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

export const AnimalSummary = () => {
  return (
    <div>

<Grid item xs={8}>
                <Card sx={{ minWidth: 480 }}>
                  <CardContent>

                  <Chart
                  chartType="Bar"
                  width="100%"
                  height="400px"
                  data={dataBarChart}
                  options={optionsBarChart}
                />

                  </CardContent>
                  <CardActions>
                    <Stack direction="row-reverse">
                      <Button size="small">Learn More</Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Grid>
           
    </div>
  )
}
