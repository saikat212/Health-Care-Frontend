import {
  AppBar,
  Grid,
  Typography,
  Button,
  Badge,
  IconButton,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import ShowNotification from "components/notification";
import Search from "@mui/icons-material/Search";
import { styled, alpha } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import InputBase from '@mui/material/InputBase';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import { Patient } from "Classes/entity-class";

// import SearchBar from "./search-bar";
export const headerHeight = 90;


export default function PatientAppbar() {
 const navigate = useNavigate();
 const patient_id =  (JSON.parse(localStorage.getItem("Patient") || "") as Patient).id
 function handleLogOut(){
  localStorage.clear()
       navigate("/")
}

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "indigo" }}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ backgroundColor: "white", padding: "10px", height: headerHeight }}
        spacing={2}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <img src={require("../../images/heaa.jpg")} height="40px" />
            </Grid>
            <Grid item>
              <Typography color={"red"} fontSize={"6"}>
                Health Care
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            spacing={2}
          >
          
            <Grid item>
              <Button>Profile</Button>
            </Grid>
            <Grid item>
              <ShowNotification id = {patient_id as number} />
            </Grid>
            <Grid item>
              <Button onClick={
               handleLogOut
                } variant="contained">
                Log Out
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}

