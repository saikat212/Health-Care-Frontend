import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DoctorDetailsCard from "components/Doctor/doctor-details-card";
import Header from "components/header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Doctor, Speciality } from "Classes/entity-class";
import { API } from "API Handler/api";
import ts from "typescript";

export function DoctorListUI() {
  
  const {state}= useLocation();
  const [doctor, setDoctor] = React.useState<Doctor[]>();
  console.log(state)
  useEffect(() => {   //Data will be loaded first time only
    //@ts-ignore
    state && API.doctor.getDoctorsBySpeciality(state.id).then(response=>{
      setDoctor(response.data);
      console.log(response.data);
   })
  }, [])

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ backgroundColor: "yellow", padding: "10px", height: "100%" }}
      spacing={2}
    >
    <Grid item>
        <Header/>
    </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ backgroundColor: "blue", padding: "10px", height: "100%" }}
          spacing={5}
        >
          {doctor?.map((doc, idx) => (
            <Grid key={idx} item>
            
              <DoctorDetailsCard
              doctor= {doc}              />
        
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
