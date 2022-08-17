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
import { API } from "API Handler/api";
import { DCTestList, DiagnosticCenter } from "Classes/entity-class";
  
  // import SearchBar from "./search-bar";
  export const headerHeight = 90;
  
  
  export default function PatientAppbar() {
   const navigate = useNavigate();
//    const choiceList = ['yes','no'];
  
//    const handleDCList = (event) => {
//     // setDcAdmin({ ...dcAdmin, isOfferOnsiteTest : event.target.value});
//     console.log(event.target.value);
//   };
  
  
     function handleLogOut(){
      localStorage.clear()
           navigate("/")
    }
  
    // const [testname, setTestName] = useState("");
    // const [dctestlist,setDCTestList] = useState<DCTestList[]>();

    // const handleSearch = (event) => {
    //   event.preventDefault();
    // //   setTestName(event.target.value);
    //   console.log("handle search a ki ase asce value:")
    //   console.log(event.target.value);
    //   console.log("testname value: aiche")
    //   console.log(testname);

    //   testname && 
    //   API.dcTestList.getDCByTestName(testname as string).then((response) => {
    //   setDCTestList(response.data);
    //   console.log("dctestlist : paichi db theke: ")
    //   console.log(response.data)
    //   console.log("dctestlist : send korsi: ")
    //   console.log(dctestlist);
    //   navigate("/dc-list-by-testname",{state: response.data})
    //   });

    // }
  
  
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
                {/* <img src={require("../../images/heaa.jpg")} height="40px" /> */}
              </Grid>
              <Grid item>
                <Typography color={"red"} fontSize={"6"}>
                  Health Care
                </Typography>
              </Grid>
            </Grid>
          </Grid>
  
          <Grid item>
            <Grid container direction="column">
            {/* onSubmit={handleSearch} */}
  
              {/* <form onSubmit={handleSearch} > 
                <label>
                  <input
                    type="text"
                    placeholder="Type test name"
                    value={testname}
                    onChange={(e) => setTestName(e.target.value)}                 
                  />
                </label>
                <input type="submit"/>
              </form> */}
  
            </Grid>
          </Grid>
  
          {/* <Grid item>
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                Test
              </InputLabel>
              <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //@ts-ignore
                // value={dcAdmin?.isOfferOnsiteTest || null}
                 value={null}
                label="Test"
                onChange={handleDCList}
              >
                {choiceList?.map((option, idx) => (
                  <MenuItem key={idx} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid> */}
  
  
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
                <ShowNotification num = {3} />
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
  
  