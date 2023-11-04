import './CSS/login.css'
import logo2 from '../assets/logo2.svg'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { logIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate('/appRouter/dashboard')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
    <div  className='signup-container'>
        <img className='agrimate-logo' src={logo2} />
        <Typography variant='h4' gutterBottom >Agrimate</Typography>

        <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
        <Stack spacing={2}>
          <TextField label='Email' type='email' onChange={(e) => setEmail(e.target.value)}/>
          <TextField label='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
        </Stack>

        <Stack spacing={2} direction='row-reverse'>
          <Button variant='contained' style={{ background: 'black' }} onClick={handleSubmit}>Login</Button>
          <Button variant='text' href='/' style={{ color: 'black' }} >Cancel</Button>
        </Stack>
          <Typography>or</Typography>
          <Button variant='contained' style={{background: 'black'}} startIcon={<GoogleIcon />}>ContinueWithGoogle</Button>
        <Link to='/sign'>Don't have an account? Signup</Link >
      </Stack>        
        </form>
    </div>)
}
