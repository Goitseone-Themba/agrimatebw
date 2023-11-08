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

export const AddInventory = ({ closeEvent }) => {

  const empCollectionRef = collection(db, "inventory");
  const [name, setName] = useState("");
  const [category, setCategory ] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [condition, setCondition] = useState("");

  const handleNameChange = (event) => {
          setName(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value)
  } 

  const handleConditionchange = (event) => { 
    setCondition(event.target.value)
  }

  const createUser = async () => {
    await addDoc(empCollectionRef, {
        name: name,
        category: category,
        quantity: Number(quantity),
        condition: condition,
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
        <Typography variant="h5">Add New Inventory</Typography>

        <TextField label="Name" type="text" value={name} onChange={handleNameChange} />

        <TextField label="Category" type="text" value={category} onChange={handleCategoryChange} />

        <TextField label="Quantity" type="text" value={quantity} onChange={handleQuantityChange} />

        <TextField label="Condition" type="text" value={condition} onChange={handleConditionchange} />

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
