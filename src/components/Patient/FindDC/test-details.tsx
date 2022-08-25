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
    <>
    <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "80px", height: "100%" }}
        spacing={2}
      >
        <Grid item>
                <Typography sx={{ fontWeight: "bold" }} >Test Information</Typography>
        </Grid>
    
        <Grid item>
    
        <Grid
          container
          direction="row"
          alignItems="baseline"
          justifyContent="space-between"
          sx={{ padding: "10px", height: "100%" }}
          spacing={6}
        >
    
          {/* <Grid item>
            <img src={require("./images/DC.jpg")} height="100px" />
          </Grid> */}
    
          {/* 2nd column */}
  
              <Grid item >
                <Typography sx={{ fontWeight: "bold" }} >Name</Typography>
                <Typography >
                {dc_test_list_info.test?.name}
                </Typography>
              </Grid>

              <Grid item>
    
                <Typography sx={{ fontWeight: "bold" }} >Description</Typography>
                <Typography >
                {dc_test_list_info.test?.description}
                </Typography>
    
    
              </Grid>
              
              <Grid item >
              <Typography sx={{ fontWeight: "bold" }} >Price </Typography>
              <Typography>
              {dc_test_list_info.price} TK
              </Typography>

              </Grid>
              <Grid item >
              <Typography sx={{ fontWeight: "bold" }} > Prerequisite </Typography>
                <Typography>
                {dc_test_list_info.test?.prerequisite}
                </Typography>
              </Grid>

              <Grid item >
                
              <Typography sx={{ fontWeight: "bold" }} > Is-Remote-Test-Available </Typography>
                <Typography>
                {dc_test_list_info.isOnlineTestAvailable}
                </Typography>
              </Grid>
    
        </Grid>
    
    
    
        </Grid>

        
    
    
      </Grid>
    
    </>
    );
}
