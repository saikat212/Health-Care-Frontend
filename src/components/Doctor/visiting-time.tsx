import { Grid, TextField, Button, Autocomplete } from "@mui/material";
import {
  LocalizationProvider,
  DateTimePicker,
  StaticTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { API } from "API Handler/api";
import { Doctor } from "Classes/entity-class";
import setAppointment from "components/SeekAppointment/set-appointment";
import React from "react";
import DoctorLayout from "./doctor-layout";

export default function VisitingTime() {
  const days = ["Sat", "Sun", "Mon","Tues","Wed","Thu","Fri"];
  const [selectedDays, setSelectedDays] = React.useState<string[]>([]);
  const [startTime, setStartTime] = React.useState<Date | null>(new Date());
  const [endTime, setEndTime] = React.useState<Date | null>(new Date());
  const [doctor, setDoctor] = React.useState<Doctor>();
  var str = "";
  var st, et;
  function handleConfirm() {
    console.log("s: " +selectedDays)
    for(let i = 0 ;i < selectedDays?.length;i++){
      if(i != selectedDays.length-1)  str+= selectedDays[i]+" - "
      else str+= selectedDays[i]
    }
    
    
    //@ts-ignore
    st=startTime.toLocaleString('en-US', { hour: 'numeric', hour12: true })
    //@ts-ignore
    et = endTime.toLocaleString('en-US', { hour: 'numeric', hour12: true })
   
     API.doctor.updateVisitingTime({
        ...doctor,
        id: (JSON.parse(localStorage.getItem("Doctor")||"") as Doctor).id,
        visitingDay:str,
        visitingTime:st+" - "+et
    }).then(response=>{
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
          <Autocomplete
            multiple
            disablePortal
            id="combo-box-demo"
            options={days}
            onChange={(event: any, newValue: string[]) => {
              setSelectedDays(newValue);
              console.log(newValue);
            }}
            sx={{ width: 500 }}
            renderInput={(params) => (
              <TextField {...params} label="Choose your available day" />
            )}
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
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticTimePicker
                  displayStaticWrapperAs="mobile"
                  label="Select Appointment Start time"
                  value={startTime}
                  onChange={(newValue) => {
                    setStartTime(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticTimePicker
                  displayStaticWrapperAs="mobile"
                  label="Select Appointment End time"
                  value={endTime}
                  onChange={(newValue) => {
                    setEndTime(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" color="success" onClick={handleConfirm}>
            Confirm
          </Button>
        </Grid>
      </Grid>
    </DoctorLayout>
  );
}
