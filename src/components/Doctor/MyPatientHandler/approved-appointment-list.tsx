import { Button, Grid, Typography } from "@mui/material";
import Header from "components/header";
import { Link } from "react-router-dom";
import ApprovedAppointmentListCard from "./approved-appointment-list-card";
import ResponsiveAppBar from "../doctor-page-Appbar";
import DoctorLayout from "../doctor-layout";
import { Appointment, Doctor } from "Classes/entity-class";
import React, { useEffect } from "react";
import { API } from "API Handler/api";
import { id } from "date-fns/locale";

export default function ApprovedAppointmentListUI() {

  const [appointment, setAppointment] = React.useState<Appointment[]>();
  
  useEffect(() => {
    const id = (JSON.parse(localStorage.getItem("Doctor")||"") as Doctor).id;
    console.log("idd: ",id);
    
    API.appointment.getAppointmentList((id as number).toString(),"approved").then((response) => {
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
            
              <ApprovedAppointmentListCard
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
