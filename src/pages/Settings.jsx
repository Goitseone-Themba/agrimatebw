import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Box,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
  TextField,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const lightTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

const containerStyle = {
  border: 'none', // Remove the border
  padding: '20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center', // Center content vertically
  justifyContent: 'center', // Center content horizontally
  minHeight: 'auto',
  height: '90vh', // Center vertically within the available viewport height
  minWidth: 'fit-content', // Make the border fit the contents
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
};

export const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language

  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      console.log('Password changed to: ' + newPassword);
    } else {
      console.error('Passwords do not match.');
    }
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleOpenPasswordDialog = () => {
    setOpenPasswordDialog(true);
  };

  const handleClosePasswordDialog = () => {
    setOpenPasswordDialog(false);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box sx={containerStyle}>
        <Box sx={contentStyle}>
          <Typography variant="h4" gutterBottom>
            Settings
          </Typography>

          <Typography variant="h5" gutterBottom>
          Click below to Change Password
          </Typography>

          <Button variant="contained" color="primary" onClick={handleOpenPasswordDialog}>
            Change Password
          </Button>

          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
                label="Dark Mode"
              />
            </FormGroup>
          </FormControl>

          <Typography variant="h5" gutterBottom>
            Language Settings
          </Typography>

          <Select
            label="Language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="fr">French</MenuItem>
            {/* Add more languages as needed */}
          </Select>
        </Box>

        <Dialog open={openPasswordDialog} onClose={handleClosePasswordDialog}>
          <DialogTitle>Change Password</DialogTitle>
          <DialogContent>
            <TextField
              label="Current Password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              margin="normal"
              fullWidth
            />

            <TextField
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              margin="normal"
              fullWidth
            />

            <TextField
              label="Confirm New Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              margin="normal"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosePasswordDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleChangePassword} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};
