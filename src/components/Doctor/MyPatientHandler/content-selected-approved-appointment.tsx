import { Grid, Typography, Rating, Stack, Button } from "@mui/material";
import { Appointment } from "Classes/entity-class";
import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DoctorLayout from "../doctor-layout";
import ApprovedAppointmentDetailsTwo from "./approved-appointment-details2";


export function ContentSelectedApprovedAppointment() {

  const {state} = useLocation();
  const navigate = useNavigate();
  
  const [appointment, setAppointment] = React.useState<Appointment>(new Appointment());
  useEffect(() => {
    
    state && setAppointment(state as Appointment);
  }, []);

  return (
    <DoctorLayout>
     <ApprovedAppointmentDetailsTwo
          appointment= {state as Appointment}/>
    <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ backgroundColor: "white", padding: "10px", height: "100%" }}
        spacing={2}
      >
      <Grid item>
        <Button variant="contained" onClick={()=>navigate("/set-prescription-info",{state:appointment})}>Generate Prescription</Button>
      </Grid>
      </Grid>
 
   </DoctorLayout>


  );
}
