import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import React from "react";
import { Appointment, DC_Test, Patient } from "Classes/entity-class";

export default function SetDCAppointmentDetails({dc_test,onChange}:{dc_test:DC_Test; onChange:(value)=>void}) {
  //console.log(JSON.parse(localStorage.getItem("Patient")||"") )

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Patient's info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            disabled
            value={
              (JSON.parse(localStorage.getItem("Patient") || "") as Patient)
                ?.person?.firstName
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            disabled
            value={
              (JSON.parse(localStorage.getItem("Patient") || "") as Patient)
                ?.person?.lastName
            }
          />
        </Grid>
        <label htmlFor="Main symptom"></label>
        <Grid></Grid>

        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Location"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={(e)=>{
              onChange({
                ...dc_test,
                location :e.target.value
              })
            }}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Weight (kg)"
            fullWidth
            autoComplete="weight"
            variant="standard"
            onChange={(e)=>{
              onChange({
                ...appointment,
                patient:{
                  ...appointment?.patient,
                  height : parseInt((e.target.value)),
                }
              })
            }}
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Height (cm)"
            fullWidth
            autoComplete="height"
            variant="standard"
            onChange={(e)=>{
              onChange({
                ...appointment,
                patient:{
                  ...appointment?.patient,
                  weight : parseInt((e.target.value)),
                }
              })
            }}
          />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Mobile No."
            fullWidth
            autoComplete="mobileNo"
            variant="standard"
            value={
              (JSON.parse(localStorage.getItem("Patient") || "") as Patient)
                ?.person?.mobileNo
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            value={
              (JSON.parse(localStorage.getItem("Patient") || "") as Patient)
                ?.person?.email
            }
          />
        </Grid>
        <Grid item xs={12}>
          {/*  <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}


