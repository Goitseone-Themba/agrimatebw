import { useState } from "react";
import { Button, Stack, TextField, Typography, InputAdornment } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
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

export const AddAnimal = ({ closeEvent }) => {

  const empCollectionRef = collection(db, "animals");
  const [species, setSpecies] = useState("");
  const [breed, setBreed ] = useState("");
  const [age, setAge] = useState(0);
  const [animalGender, setAnimalGender] = useState("");

  const handleSpeciesChange = (event) => {
          setSpecies(event.target.value)
  }

  const handleBreedChange = (event) => {
    setBreed(event.target.value)
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value)
  } 

  const handleAnimalGenderChange = (event) => {
    setAnimalGender(event.target.value)
  }

  const createUser = async () => {
    await addDoc(empCollectionRef, {
        species: species,
        breed: breed,
        animalGender: animalGender,
        age : Number(age),
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
        <Typography variant="h5">Add New Animal</Typography>

        <TextField label="Species" type="text" value={species} onChange={handleSpeciesChange} />

        <TextField label="Breed" type="text" value={breed} onChange={handleBreedChange} />

        <TextField label="Animal Gender" type="text" value={animalGender} onChange={handleAnimalGenderChange} />

        <TextField label="Age" type="text" value={age} onChange={handleAgeChange} />

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
  )
}
