import Box from '@mui/material/Box';
import CropList from './Crops/CropList';

export const CropMonitoring = () => {
  return (<>
    <div>
      <Box height={70}/>
      <Box sx={{display: 'flex'}}>
      <Box width={30}/>
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <CropList />
    </Box>
      </Box>
    </div>
  </>
  )
}
