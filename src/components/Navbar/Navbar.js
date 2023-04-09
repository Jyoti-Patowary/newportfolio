import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FiMenu } from 'react-icons/fi';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

const list = () => (
  <React.Fragment>
    <List sx={{ width: 200 }} onClick={toggleDrawer(false)}>
      <ListItem >
        <Button color="inherit">Home</Button>
      </ListItem>
      <ListItem>
        <Button color="inherit">Works</Button>
      </ListItem>
      <ListItem >
        <Button color="inherit">About</Button>
      </ListItem>
      <ListItem >
        <Button color="inherit">Contact</Button>
      </ListItem>
    </List>
  </React.Fragment>
);

  return (
    <AppBar position="fixed" sx={{ flexWrap: 'wrap', bgcolor: 'black', color: 'white' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>JP</h2>
        <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Contact</Button>
        </Stack>
      <Button sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkred' } }}>Let's Talk</Button>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <FiMenu />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;