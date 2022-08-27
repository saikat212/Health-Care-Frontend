import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import FixedBottomNavigation from 'components/Doctor/doctor-homepage-container'
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import ShowNotification from '../AdminNotification/ShowNotification';
import { DiagnosticCenter } from 'Classes/entity-class';

const pages = ['Monitor', 'About', 'Blog'];
const setting = ['Profile', 'Account', 'Dashboard', 'Logout'];

const DCAdminPageAppbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const admin_id = (JSON.parse(localStorage.getItem("DCAdminId") || "") as number );
  console.log("admin_id: ");
  console.log(admin_id);
  

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleProfile()
  {

  }
  function handleLogout()
  {
    localStorage.clear();
    navigate("/")
  }

  return (
    <>
  
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DCAdmin
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button  sx={{ my: 2, color: 'white', display: 'block' }} onClick={()=>navigate("/dc-admin-home-page")} variant="contained">Home</Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}  onClick={()=>navigate("/submitted-test-list-ui")} variant="contained">Submitted-Test</Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}  onClick={()=>navigate("/offsite-requested-test-list-ui")} variant="contained"> Offsite-pending-test </Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}  onClick={()=>navigate("/pending-ack-test-list-ui")} variant="contained">Pending-ACK</Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => navigate("")} variant="contained"> 
              Notification <ShowNotification id = {admin_id as number} />
              </Button>
          </Box>
     

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
                <MenuItem key={setting[0]} onClick={handleProfile}>
                  <Typography textAlign="center">{setting[0]}</Typography>
                </MenuItem>
                <MenuItem key={setting[3]} onClick={handleLogout}>
                  <Typography textAlign="center">{setting[3]}</Typography>
                </MenuItem>
  
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};
export default DCAdminPageAppbar;
