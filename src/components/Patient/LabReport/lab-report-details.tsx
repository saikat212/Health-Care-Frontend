import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Grid, Typography, Rating, Stack, Button, IconButton } from "@mui/material";
import { API } from "API Handler/api";
import { DCTestList, DC_Test, DiagnosticCenter, Taker } from "Classes/entity-class";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export  function LabReportDetails({dc_test_info}:{dc_test_info:DC_Test}) {
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

   function get_Date(strDate:string) {
    var date = new Date(strDate);
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    var str = day + "-" + month + "-" + year;
    return str;
  } 

  
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
                <Typography sx={{ fontWeight: "bold" }} >Report Information</Typography>
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
                <Typography sx={{ fontWeight: "bold" }} >Test Name</Typography>
                <Typography >
                {dc_test_info.dcTestList?.test?.name}
                </Typography>
              </Grid>

              <Grid item>
    
                <Typography sx={{ fontWeight: "bold" }} >Diagnostic Center</Typography>
                <Typography >
                {dc_test_info.dcTestList?.dc?.name}
                </Typography>
    
    
              </Grid>
              
              <Grid item >
              <Typography sx={{ fontWeight: "bold" }} > Diagnostic Center Hotline </Typography>
              <Typography>
              {dc_test_info.dcTestList?.dc?.person?.mobileNo}
              </Typography>

              </Grid>
              <Grid item >
              <Typography sx={{ fontWeight: "bold" }} > Date </Typography>
                <Typography>
            
                {get_Date(String(dc_test_info.date))}
                </Typography>
              </Grid>

            <Grid item >
              <Typography sx={{ fontWeight: "bold" }} > View Report </Typography>
            </Grid>
    
        </Grid>    
        </Grid>

        
    
    
      </Grid>
    
    </>
    );
}
