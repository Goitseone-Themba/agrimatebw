import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react';
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


export const CropSummary = () => {

  const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "currentCrops");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


  const data = [
    ["Crop Type", "Area Planted"],
    ["Legumes", 11],
    ["Cereal", 6],
    ["Vegetables", 20],
    ["Fruits", 15],
    ["Unplanted", 10],
  ];

  const options = {
    title: "Crop Monitoring",
    subtitle: "Crop Type, Area Planted",
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div>

  <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ minWidth: 480 }}>
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
              
              </Grid>
            </Grid>



    </div>
  )
}
