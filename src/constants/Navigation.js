import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {
//     Button, MenuItem, MenuList, AppBar,
//     Toolbar, Typography, IconButton
// } from '@material-ui/core';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = [
  {
    name: 'Home',
    link: '/home'
  },
  {
    name: 'About',
    link: '/home#about'
  },
  {
    name: 'Skills',
    link: '/home#skills'
  },
  {
    name: 'Portfolio',
    link: '/portfolio'
  },
  {
    name: 'Services',
    link: '/home#services'
  },
  {
    name: 'Booking',
    link: '/home#booking'
  },
  {
    name: 'Contact Us',
    link: 'mailto:dashofdara@gmail.com'
  },
  {
    name: 'Policies',
    link: '/policy'
  }
];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="sticky" className="navbar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu icon"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <a href={page.link} className="navlink">{page.name}</a>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <a href={page.link} className="navlink">{page.name}</a>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>




      {/* <AppBar className="navbar">
                    <Toolbar className="nav">
                        <Typography variant="h6" className="nav-item">
                            <a href="#about" className="navlink">About</a>
                        </Typography>
                        <Typography variant="h6" className="nav-item">
                            <a href="#skills" className="navlink">Skills</a>
                        </Typography>
                        <Typography variant="h6" className="nav-item">
                            <a href="#services" className="navlink">Services</a>
                        </Typography>
                    </Toolbar>
                </AppBar> */}
    </>
  )
}

export default Navigation;