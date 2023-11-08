import Box from '@mui/material/Box';
import { AnimalList } from './Animals/AnimalList';

export const AnimalTracking = () => {
  return (
    <div>
      <Box height={70}/>
      <Box sx={{display: 'flex'}}>
      <Box width={30}/>
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <AnimalList />
    </Box>
      </Box>
    </div>
  )
}

