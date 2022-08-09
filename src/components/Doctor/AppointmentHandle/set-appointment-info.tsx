import { ButtonGroup, Button, Grid, TextField } from "@mui/material";
import ResponsiveAppBar from "../doctor-page-Appbar";
import BasicDateTimePicker from "./basic-date-time-picker";
import ComboBox from "./combo-box";
import BasicButton from "./basic-button";
import DoctorLayout from "../doctor-layout";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Appointment } from "Classes/entity-class";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { API } from "API Handler/api";
export function SetAppointmentInfo() {
    const {state} = useLocation();
    const [appointment, setAppointment] = React.useState<Appointment>(new Appointment());
    const [date, setDate] = React.useState<Date>(new Date());
    const [comment, setComment] = React.useState<string>("");

    useEffect(() => {   
        state && setAppointment(state as Appointment);
      }, [])
    
      const handleConfirm =(e)=>{
        console.log(date,comment)
         API.appointment.confirmAppointment(appointment).then((response)=>{
            console.log(response.data)
         })
      }
      const handleReject = (e) => {
        API.appointment.confirmAppointment(appointment).then((response)=>{
            console.log(response.data)
         })
      }
      

  return (
    <DoctorLayout>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ backgroundColor: "white", padding: "10px", height: "100%" }}
        spacing={2}
      >
        <Grid item>
         <BasicDateTimePicker 
         text = "Set Appointment Time"
         onChange ={(value)=>{
           setAppointment({
            ...appointment,
            dateGivenByDoctor:value
           })
         }
        }
         />
        </Grid>
        <Grid item>
          <TextField
            autoComplete="comment"
            fullWidth
            id="firstName"
            label="Comment if any"
            autoFocus
            onChange={(e)=>{
                setAppointment({
                    ...appointment,
                    commentFromDoctor: e.target.value
                   })
            }}
          />
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ backgroundColor: "white", padding: "10px", height: "100%" }}
            spacing={2}
          >
            <Grid item>
              <Button variant="contained" color="success" onClick={handleConfirm}>
                Confirm
              </Button>
            </Grid>

            <Grid item>
              <Button variant="contained" color="error" onClick={handleReject}>
                Reject
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DoctorLayout>
  );
}
