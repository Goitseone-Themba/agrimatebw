import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import InventoryIcon from '@mui/icons-material/Inventory';
import YardIcon from '@mui/icons-material/Yard';
import PetsIcon from '@mui/icons-material/Pets';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import logo2 from '../assets/logo2.svg';
import auth from '../firebase';
import { Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideNav() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleItemClick = (path) => {
    navigate(path);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleUserProfileClick = () => {
    handleMenuClose(); // Close the menu
    navigate('/userProfile'); // Navigate to the UserProfile page
  };

  const handleOpenLogoutDialog = () => {
    setIsLogoutDialogOpen(true);
    handleMenuClose(); // Close the menu
  };

  const handleCloseLogoutDialog = () => {
    setIsLogoutDialogOpen(false);
  };

  const handleLogout = () => {
    // Perform the logout action here
    auth.signOut().then(() => {
      // After successful logout, navigate to the landing page
      navigate('/');
    });
  };

  return (
    <Box sx={{ display: 'flex' }} style={{ background: '#E2ECFF', color: 'black' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ background: '#E2ECFF', color: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h5" noWrap component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ flexGrow: 1 }}></span>
            <div onClick={handleMenuOpen}>
              <img src={logo2} alt="logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
            </div>
            Agrimate
          </Typography>

          <div style={{ flexGrow: 1 }} />
          
          <div onClick={handleMenuOpen}>
          <AccountCircleIcon style={{ width: '40px', height: '40px', marginRight: '100px' }} />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} style={{ background: '#E2ECFF', color: 'black' }}>
        <DrawerHeader style={{ background: '#E2ECFF', color: 'black' }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={{ background: '#E2ECFF', color: 'black' }}>
          {[
            { text: 'Dashboard', icon: <DashboardIcon />, path: '/appRouter/dashboard' },
            { text: 'Inventory Management', icon: <InventoryIcon />, path: '/appRouter/inventoryManagement' },
            { text: 'Animal Tracking', icon: <PetsIcon />, path: '/appRouter/animalTracking' },
            { text: 'Crop Monitoring', icon: <YardIcon />, path: '/appRouter/CropMonitoring' },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => handleItemClick(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List style={{ background: '#E2ECFF', color: 'black', height: '100%' }}>
          {['Settings'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {<SettingsSuggestIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Menu
        id="profile-menu"
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
  <Link to="/AppRouter/userProfile">UserProfile</Link>
</MenuItem>
<MenuItem onClick={handleOpenLogoutDialog}>Logout</MenuItem>

      </Menu>

      {/* Logout Confirmation Dialog */}
      <Dialog open={isLogoutDialogOpen} onClose={handleCloseLogoutDialog}>
        <DialogTitle>Logout</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Are you sure you want to log out?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogoutDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogout} color="primary">
  <Link to="/">Logout</Link>
</Button>


        </DialogActions>
      </Dialog>
    </Box>
  );
}
