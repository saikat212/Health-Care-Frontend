import {
    Grid,
    Typography,
    Rating,
    Stack,
    Button,
    TextField,
  } from "@mui/material";
  import { Appointment, DCTestList, DC_Test, Doctor, Patient } from "Classes/entity-class";
  import { useLocation, useNavigate } from "react-router-dom";
  import { useEffect, useState } from "react";
  import React from "react";
  import { DatePicker } from "@mui/x-date-pickers";
  import PatientAppbar from "components/Patient/patient-appbar";
  import PatientLayout from "components/Patient/patient-layout";
  
  export default function SetInfo({ dc_test_list }: { dc_test_list: DCTestList }) {
    const navigate = useNavigate();
    // const {state} = useLocation();
    // const [dc_test_list,setDCTestList] = React.useState<DCTestList>(new DCTestList());
    const [dc_test,setDCTest] = React.useState<DC_Test>();

   // dc_test_list class object = one row
    console.log("SetInfo: passed : dc_test_list : ")
    console.log(dc_test_list)
    //dc_test == appointment data
    // dc_test_list , dc_test er ekta column
  


    useEffect(() => {
      //Data will be loaded first time only
    
    // confusion : set call duibar
    //  console.log("in useeffect call")    
    // state && setDCTestList(state as DCTestList);
    // console.log("dcTestList : after1 setDCTestList set ")
    // console.log(dc_test_list)


    console.log("SetInfo: useeffect")
    console.log("SetInfo:Before dcTestList: dc_test_list =? ")
    console.log(dc_test_list)
      setDCTest({
        ...dc_test,
        patient: JSON.parse(localStorage.getItem("Patient") || "") as Patient,
        // Problematic part
        dcTestList: dc_test_list,

      });
      

    }, []);
  
    return (
     
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: "10px", height: "100%" }}
          spacing={2}
        >
          {/* Picture */}
          <Grid item>
            {/* <img src={require("../../../images/doctor.jpg")} height="150px" /> */}
          </Grid>
          {/* //1st Column */}
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="space-between"
              sx={{ padding: "10px", height: "100%" }}
              spacing={2}
            >
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: "10px", height: "100%" }}
                spacing={2}
              >
                <Grid item>
                <Typography sx={{ fontWeight: "bold" }}>
                   ########## DC Info ##########: 
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                   Name : {dc_test_list.dc?.name}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                   Location : {dc_test_list.dc?.location}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                   Rating : 4.4
                  </Typography>

                  <Typography sx={{ fontWeight: "bold" }}>
                    ####################
                  </Typography>

                  <Typography sx={{ fontWeight: "bold" }}>
                   ########## Test Info ##########: 
                  </Typography>
              
                  <Typography sx={{ fontWeight: "bold" }}>
                    Name : {dc_test_list.test?.name}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Is_Online_Test : {dc_test_list.isOnlineTestAvailable}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Price : {dc_test_list.price}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography></Typography>
                </Grid>
              </Grid>
  
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: "10px", height: "100%" }}
                spacing={2}
              >
                <Grid item>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {/* Specialities */}
                  </Typography>
                </Grid>
                <Grid item>
                  {/* <Typography>{doctor.speciality?.name}</Typography> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/*  //2nd Column */}
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="space-between"
              sx={{ padding: "10px", height: "100%" }}
              spacing={2}
            >
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: "10px", height: "100%" }}
                spacing={2}
              >
                <Grid item>
                  {/* <Typography sx={{ fontWeight: "bold" }}> Chamber</Typography> */}
                </Grid>
                <Grid item>
                  {/* <Typography>{doctor.chamber}</Typography> */}
                </Grid>
              </Grid>
  
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: "10px", height: "100%" }}
                spacing={2}
              >
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ padding: "10px", height: "100%" }}
                    spacing={2}
                  >
                    <Grid item>
                      <Typography sx={{ fontWeight: "bold" }}>
                        {/* Visiting Day */}
                      </Typography>
                    </Grid>
                    <Grid item>
                      {/* <Typography>Sat - Mon - Wed</Typography> */}
                    </Grid>
                  </Grid>
                </Grid>
  
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ padding: "10px", height: "100%" }}
                    spacing={2}
                  >
                    <Grid item>
                      {/* <Typography sx={{ fontWeight: "bold" }}>Visiting Time</Typography> */}
                    </Grid>
                    <Grid item>
                     {/* {doctor.visitingTime} */}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
  
          {/*    //3rd column */}
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="space-between"
              sx={{ padding: "10px", height: "100%" }}
              spacing={2}
            >
              <Grid item>
                <Typography></Typography>
              </Grid>
              <Grid item>
                <DatePicker
                //   label="Select an appointment date"
                //   value={appointment?.date}
                //   onChange={(newValue) => {
                //     setAppointmet({
                //       ...appointment,
                //       date: newValue || undefined,
                //     });
                //   }}

                label="Testing date"
                value={dc_test?.date}
                onChange={(newValue) => {
                  setDCTest({
                    ...dc_test,
                    date: newValue || undefined,
                  });
                }}

                
                  renderInput={(params) => (
                    <TextField required fullWidth {...params} />
                  )}
                />
              </Grid>
              <Grid item>
                <Button
                  onClick={() =>
                    navigate("/set-dc-appointment", { state: dc_test })
                  }
                  variant="contained"
                  color="success"
                >
                  DC Request
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
     
    );
  }
  