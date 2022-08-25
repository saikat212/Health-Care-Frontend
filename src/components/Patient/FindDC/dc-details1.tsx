import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Grid, Typography, Rating, Stack, Button, IconButton } from "@mui/material";
import { API } from "API Handler/api";
import { DCTestList, DC_Test, DiagnosticCenter, Taker } from "Classes/entity-class";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function DCDetails1({ dc_test_list_info }: { dc_test_list_info: DCTestList }) {
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
        <img src={require("./images/DC.jpg")} height="150px" />
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

              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: "10px", height: "100%" }}
                spacing={6}
              >
                <Grid item >
                  <Typography sx={{ fontWeight: "bold" }}>
                    Test Information
                  </Typography>
                </Grid>

                <Grid item>

                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ padding: "10px", height: "100%" }}
                    spacing={8}
                  >

                    <Grid item >
                      <Typography sx={{ fontWeight: "bold" }} > Name  </Typography>
                      <Typography >
                        {dc_test_list_info.test?.name}
                      </Typography>
                    </Grid>


                    <Grid item >
                      <Typography sx={{ fontWeight: "bold" }} >Price  </Typography>
                      <Typography >
                        {dc_test_list_info.price}
                      </Typography>

                    </Grid>

                    <Grid item>
                      <Typography sx={{ fontWeight: "bold" }} >OnlineTest </Typography>
                      <Typography >
                        {dc_test_list_info.isOnlineTestAvailable}
                      </Typography>

                    </Grid>

                  </Grid>


                </Grid>


              </Grid>

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

              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: "10px", height: "100%" }}
                spacing={2}
              >
                <Grid item >
                  <Typography sx={{ fontWeight: "bold" }}>
                    Diagnostic Center Information
                  </Typography>
                </Grid>

                <Grid item>

                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ padding: "10px", height: "100%" }}
                    spacing={8}
                  >


                    <Grid item >
                      <Typography sx={{ fontWeight: "bold" }} > Name  </Typography>
                      <Typography >
                        {dc_test_list_info.dc?.name}
                      </Typography>
                    </Grid>


                    <Grid item >
                      <Typography sx={{ fontWeight: "bold" }} >Location  </Typography>
                      <Typography >
                        {dc_test_list_info.dc?.location}
                      </Typography>

                    </Grid>

                    <Grid item>
                      <Typography sx={{ fontWeight: "bold" }} >Rating </Typography>
                      <Typography >
                        4.4
                      </Typography>

                    </Grid>

                  </Grid>


                </Grid>


              </Grid>

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
          </Grid>
        </Grid>
      </Grid>

      {/*    //3rd column */}
    </Grid>
  );
}
