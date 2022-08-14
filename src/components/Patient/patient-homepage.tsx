import { Button, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import PatientAppbar from "./patient-appbar";
import BasicCard from "components/card";
import PatientLayout from "./patient-layout";
import FindDCCard from "./FindDC/FindDCCard";

export default function Patient_Home_Page() {
  const navigate = useNavigate();
  return (
    <PatientLayout>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ backgroundColor: "white", padding: "10px", height: "100%" }}
        spacing={2}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{ backgroundColor: "white", padding: "10px", height: "100%" }}
            spacing={2}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom component="div">
                Find the best doctor of the country
              </Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={() => navigate("/specialities")}
                variant="contained"
              >
                Find Doctor Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img src={require("./images/f.jpg")} height="400px" />
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
              <BasicCard text="Medical History"></BasicCard>
            </Grid>
            <Grid item>
              <BasicCard text="Lab Reports"></BasicCard>
            </Grid>
            <Grid item>
              <FindDCCard text="Find a diagnostic Center"></FindDCCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PatientLayout>
  );
}
