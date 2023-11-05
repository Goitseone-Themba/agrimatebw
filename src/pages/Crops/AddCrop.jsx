import { useState } from "react";
import { Button, Stack, TextField, Typography, InputAdornment } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import DatePicker from "@mui/lab/DatePicker";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Swal from "sweetalert2";

export const AddCrop = ({ closeEvent }) => {
  const cropTypes = [
    { value: "Cereal" },
    { value: "Legumes" },
    { value: "Oil Seeds" },
    { value: "Root Crops" },
    { value: "Fruits" },
    { value: "Vegetables" },
  ];

  const empCollectionRef = collection(db, "currentCrops");
  const [name, setName] = useState("");
  const [cropType, setCropType] = useState(null);
  const [datePlanted, setDatePlanted] = useState(null);
  const [area, setArea] = useState("");
  const [rows, setRows] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCropTypeChange = (event, newValue) => {
    // When the user selects a crop type from the Autocomplete component
    setCropType(newValue);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const createUser = async () => {
    await addDoc(empCollectionRef, {
        name: name,
        cropType: cropType,
        datePlanted: datePlanted,
        area : Number(area),
    });
    getUsers();
    closeEvent();
    Swal.fire("Successful!");
  };

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div>
      <Stack spacing={2}>
        <Typography variant="h5">Add New Crop</Typography>

        <TextField label="Name" type="text" value={name} onChange={handleNameChange} />

        <Autocomplete
            id="cropType"
            options={cropTypes}
            value={cropType}
            onChange={handleCropTypeChange} // Add this
            renderInput={(params) => (
              <TextField {...params} label="Crop Type" variant="outlined" />
            )}
          />


        <DatePicker
          label="Date Planted"
          value={datePlanted}
          onChange={(newValue) => setDatePlanted(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />

        <TextField
          label="Area"
          type="number"
          value={area}
          onChange={handleAreaChange}
          InputProps={{
            endAdornment: <InputAdornment position="start">ha</InputAdornment>,
          }}
        />
        <Stack spacing={2} direction="row-reverse">
          <Button variant="contained" style={{ backgroundColor: "black" }} onClick={createUser}>
            Submit
          </Button>
          <Button variant="text" style={{ color: "black" }} onClick={closeEvent}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};
