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
import DCUserPageAppbar from './dc-user-page-appbar';
import DCAdminPageAppbar from './admin-page-appbar';


const DCAdminHomePage = () => {
  return (
    <>
    <DCAdminPageAppbar/>
    <FixedBottomNavigation/>
    </>
  );
};
export default DCAdminHomePage;
