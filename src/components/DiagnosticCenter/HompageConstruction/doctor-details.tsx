import { Grid, Typography, Rating, Stack } from "@mui/material";
import { API } from "API Handler/api";
import { Doctor } from "Classes/entity-class";
import { useEffect } from "react";

export function DoctorDetails({ doctor }: { doctor: Doctor }) {
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
        <img src={require("../../images/doctor.jpg")} height="150px" />
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
                {doctor.person?.firstName + " " + doctor.person?.lastName}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>MBBS</Typography>
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
              <Typography sx={{ fontWeight: "bold" }}>Specialities</Typography>
            </Grid>
            <Grid item>
              <Typography>{doctor.speciality?.name}</Typography>
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
              <Typography>{doctor.chamber}</Typography>
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
                    Experience
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>{doctor.experience} Years</Typography>
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
                  <Typography sx={{ fontWeight: "bold" }}>Rating</Typography>
                </Grid>
                <Grid item>
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
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
            <Typography>Fee:</Typography>
          </Grid>
          <Grid item>
            <Typography>{doctor.fee}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
