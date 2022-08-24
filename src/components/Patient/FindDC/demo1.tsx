import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Grid, Typography, Rating, Stack, Button, IconButton } from "@mui/material";
import { API } from "API Handler/api";
import { DCTestList, DC_Test, DiagnosticCenter, Taker } from "Classes/entity-class";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export  function TestDetails({dc_test_list_info}:{dc_test_list_info:DCTestList}) {
   const navigate = useNavigate();

  //  const handleComplete = (e) => {
  //   e.preventDefault();
  //   dc_test_info.report = "report.pdf"
  //   dc_test_info.status = "reported"
  //   API.diagnosticCenter.addDCTest(dc_test_info).then((response) => {
  //     console.log(response);
  //     console.log("yes.");
  //     navigate("/submitted-test-list-ui")
  //   });
  //  };
   

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
        {/* <img src={require("./images/me.PNG")} height="150px" /> */}
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
              Test Name  : {dc_test_list_info.test?.name}
              </Typography>
  
              <Typography >
              Test Description  : {dc_test_list_info.test?.description}
              </Typography>
              <Typography >
              Test Prerequisite  : {dc_test_list_info.test?.prerequisite}
              </Typography>
              <Typography >
               Is-Remote-Test-Available : {dc_test_list_info.isOnlineTestAvailable}
              </Typography>

              <Typography sx={{ fontWeight: "bold" }}>
              Price  : {dc_test_list_info.price}
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
              
              <Typography sx={{ fontWeight: "bold" }}> 
               
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

                  {/* <Stack direction="row" alignItems="center" spacing={2}>
                    <Button onClick={handleComplete} variant="contained" component="label">
                      Upload
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                      <input hidden accept="image/*" type="file" />
                      <PhotoCamera />
                    </IconButton>
                  </Stack> */}
        
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
