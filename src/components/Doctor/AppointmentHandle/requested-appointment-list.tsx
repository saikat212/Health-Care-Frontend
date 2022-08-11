import { Button, Grid, Typography } from "@mui/material";
import Header from "components/header";
import { Link } from "react-router-dom";
import AppointmentListCard from "./appointment-list-card";
import ResponsiveAppBar from "../doctor-page-Appbar";
import DoctorLayout from "../doctor-layout";
import { useEffect } from "react";
import { API } from "API Handler/api";
import { Appointment, Doctor} from "Classes/entity-class";
import React from "react";

export function RequestedAppointmentListUI() {

  const [appointment,setAppointment] = React.useState<Appointment[]>();
  
  useEffect(() => {
    const id = (JSON.parse(localStorage.getItem("Doctor")||"") as Doctor).id;
    console.log("idd: ",id);

    API.appointment.getAppointmentList((id as number).toString(),"pending").then((response) => {
        setAppointment(response.data)
        console.log(response)
    });
  }, []);

  return (
    
   <DoctorLayout>

  
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ backgroundColor: "yellow", padding: "10px", height: "100%" }}
      spacing={2}
    >
 
  
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ backgroundColor: "blue", padding: "10px", height: "100%" }}
          spacing={5}
        >
          {appointment?.map((appt, idx) => (
            <Grid key={idx} item>
            
              <AppointmentListCard
              appointment = {appt}
              />
        
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </DoctorLayout>


   

  );
}
