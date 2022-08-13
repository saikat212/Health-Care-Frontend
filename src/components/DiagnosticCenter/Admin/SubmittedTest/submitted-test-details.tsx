import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Grid, Typography, Rating, Stack, Button, IconButton } from "@mui/material";
import { API } from "API Handler/api";
import { DC_Test, Taker } from "Classes/entity-class";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export  function SubmittedTestDetails({dc_test_info}:{dc_test_info:DC_Test}) {
   const navigate = useNavigate();

   const handleComplete = (e) => {
    e.preventDefault();
    dc_test_info.report = "report.pdf"
    dc_test_info.status = "reported"
    API.diagnosticCenter.addDCTest(dc_test_info).then((response) => {
      console.log(response);
      console.log("yes.");
      navigate("/confirmed-test-list-ui")
    });
   };
   

   const handleSubmit = (e) => {


   };

  
  
  
  
  return(
  
      <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: "80px", height: "100%" }}
      spacing={2}
    >
      {/* Picture */}
      <Grid item>
        <img src={require("./images/me.PNG")} height="150px" />
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
                Patient Name: {dc_test_info.patient?.person?.firstName +" "+ dc_test_info.patient?.person?.lastName} 
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
               Test Name: {dc_test_info.test?.name}
              </Typography>
  
              <Typography sx={{ fontWeight: "bold" }}>
               DC Name: {dc_test_info.dc?.name}
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
               DC Location: {dc_test_info.dc?.location}
              </Typography>
  
     
            </Grid>
            <Grid item>
              <Typography></Typography>
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
              <Typography sx={{ fontWeight: "bold" }}>Patient's Location :{dc_test_info.location} </Typography>
              <Typography sx={{ fontWeight: "bold" }}> 
               Date: {String(dc_test_info.date)}
              </Typography>
            </Grid>
         
            <Grid item>
              <Typography></Typography>
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
                  <Typography sx={{ fontWeight: "bold" }}></Typography>
                </Grid>
                <Grid item>
                  <Typography></Typography>
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
                  <Typography sx={{ fontWeight: "bold" }}></Typography>
                  {/* <Stack direction="row" alignItems="center" spacing={2}>
                    <Button  onClick={handleComplete} variant="contained" component="label">
                     upload report
                    </Button>
                  </Stack> */}

                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Button onClick={handleComplete} variant="contained" component="label">
                      Upload
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                      <input hidden accept="image/*" type="file" />
                      <PhotoCamera />
                    </IconButton>
                  </Stack>
        
                </Grid>
                <Grid item>
                <Grid item>
                  <Typography></Typography>

                </Grid>
                <Stack spacing={1}>
        
          {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
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
          {/* <Grid item>
            <Typography>Fee:</Typography>
          </Grid>
          <Grid item>
            <Typography>500</Typography>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
    );
}
