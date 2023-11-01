import  './CSS/Signup.css'
import logo2 from '../assets/logo2.svg'
import { Button, Stack, TextField, Typography } from '@mui/material'

export const Signup = () => {
  return (<Typography>
    <div  className='signup-container'>
        <img className='agrimate-logo' src={logo2} />
        <Typography variant='h4' gutterBottom >Agrimate</Typography>

        <Stack spacing={2}>
        <Stack spacing={2}>
          <TextField label='Email' type='email'/>
          <TextField label='Password' type='password'/>
        </Stack>

        <Stack spacing={2} direction='row-reverse'>
          <Button variant='contained' href='/appRouter' style={{ background: 'black' }}>Next</Button>
          <Button variant='text' href='/' style={{ color: 'black' }} >Cancel</Button>
        </Stack>
      </Stack>        
    </div>
    </Typography>)
}