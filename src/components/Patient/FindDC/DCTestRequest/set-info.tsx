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
  
  export function DoctorDetails_Get_Appointment({ doctor }: { doctor: Doctor }) {
    const navigate = useNavigate();
    const {state} = useLocation();  // dc_test_list class object
    //dc_test == appointment data
    // dc_test_list , dc_test er ekta column
    const [dc_test_list,setDCTestList] = React.useState<DCTestList>(new DCTestList());
    const [dc_test,setDCTest] = React.useState<DC_Test>(new DC_Test());
  
    useEffect(() => {
      //Data will be loaded first time only
    //   setAppointmet({
    //     ...appointment,
    //     doctor: doctor,
    //     patient: JSON.parse(localStorage.getItem("Patient") || "") as Patient,
    //   });

    
      state && setDCTestList(state as DCTestList);

      setDCTest({
        ...dc_test,
        patient: JSON.parse(localStorage.getItem("Patient") || "") as Patient,
        // set dctestlist

      });


    }, []);
  
    return (
      <PatientLayout>
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
            <img src={require("../../../images/doctor.jpg")} height="150px" />
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
    
                   DC Name : {dc_test_list.dc?.name}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                   DC Name : {dc_test_list.test?.name}
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
                    Specialities
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
                  <Typography sx={{ fontWeight: "bold" }}>Chamber</Typography>
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
                        Visiting Day
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>Sat - Mon - Wed</Typography>
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
                      <Typography sx={{ fontWeight: "bold" }}>Visiting Time</Typography>
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
                <Typography>Fee: {doctor.fee}</Typography>
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

                label="Select an appointment date"
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
                    navigate("/set-appointment-details", { state: dc_test })
                  }
                  variant="contained"
                  color="success"
                >
                  Get appointment
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </PatientLayout>
    );
  }
  