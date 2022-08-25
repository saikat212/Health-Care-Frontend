import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Grid, Typography, Rating, Stack, Button, IconButton } from "@mui/material";
import { API } from "API Handler/api";
import { DC_Test, DiagnosticCenter, Taker } from "Classes/entity-class";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function DCDetails({ dc_info }: { dc_info: DiagnosticCenter }) {
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

  return (
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
            <Typography sx={{ fontWeight: "bold" }} >Diagnostic Center Info</Typography>
    </Grid>

    <Grid item>

    <Grid
      container
      direction="row"
      alignItems="baseline"
      justifyContent="space-between"
      sx={{ padding: "80px", height: "100%" }}
      spacing={8}
    >

      {/* <Grid item>
        <img src={require("./images/DC.jpg")} height="100px" />
      </Grid> */}

      <Grid item>
        
      <Typography sx={{ fontWeight: "bold" }} >Name</Typography>
                  <Typography >
                    {dc_info.name}
                  </Typography>

      </Grid>

      <Grid item>
        

      <Typography sx={{ fontWeight: "bold" }} >Location</Typography>
                  <Typography >
                    {dc_info.location}
                  </Typography>
           
        
      </Grid>


      <Grid item>
      <Typography sx={{ fontWeight: "bold" }} > Rating </Typography>
            <Typography>
             4.4 
            </Typography>
        
      </Grid>


      <Grid item>
      <Typography sx={{ fontWeight: "bold" }} >Onsite Test  </Typography>
            <Typography>
             {dc_info.isOfferOnsiteTest}
            </Typography>
        
      </Grid>

    </Grid>



    </Grid>


  </Grid>

</>

  );
}
