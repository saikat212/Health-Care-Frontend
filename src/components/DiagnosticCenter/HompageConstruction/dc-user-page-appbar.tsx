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
import { useNavigate } from 'react-router-dom';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Grid } from '@mui/material';
import ShowNotification from '../TakerNotification/ShowNotification';
import { Taker } from 'Classes/entity-class';

const pages = ['Monitor', 'About', 'Blog'];
const setting = ['Profile', 'Account', 'Dashboard', 'Logout'];

const DCUserPageAppbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const taker_id = (JSON.parse(localStorage.getItem("Taker") || "") as Taker).id

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


  function handleProfile() {

  }
  function handleLogout() {
    localStorage.clear();
    navigate("/")
  }

  return (
    <>

      <AppBar position="fixed" >
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
              SampleTaker
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => navigate("/dc-home-page")} variant="contained"> Home </Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => navigate("/requested-test-list-ui")} variant="contained">Test-Request</Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => navigate("/confirmed-test-list-ui")} variant="contained">Confirmed-Request</Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => navigate("/completed-service-list-ui")} variant="contained">Completed-Service</Button>
              
              <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => navigate("")} variant="contained"> 
              Notification <ShowNotification id = {taker_id as number} />
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
export default DCUserPageAppbar;
