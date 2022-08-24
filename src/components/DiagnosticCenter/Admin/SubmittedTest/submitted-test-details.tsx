import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Grid, Typography, Rating, Stack, Button, IconButton } from "@mui/material";
import { API } from "API Handler/api";
import { DC_Test, Taker } from "Classes/entity-class";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function SubmittedTestDetails({ dc_test_info }: { dc_test_info: DC_Test }) {
  const navigate = useNavigate();
  //  const [file,setFile] = useState<File>();

  const [url_file, setURL] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();
    dc_test_info.report = url_file;
    dc_test_info.status = "reported"
    API.diagnosticCenter.addDCTest(dc_test_info).then((response) => {
      console.log(response);
      console.log("yes.");
      navigate("/submitted-test-list-ui")
    });
  };

  const handleFile = (e) => {
    // setFile(e.target.files[0]);

    let url = URL.createObjectURL(e.target.files[0]);
    setURL(url);

    console.log("url: ")
    console.log(url)
    console.log("which file is uploaded: ")
    console.log(e.target.files[0]);

  };

  //  const handleUpload = (e) => {
  //   e.preventDefault();
  //   console.log("upload that file: ")
  //   console.log(file);
  //   console.log(url_file);
  //  };


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
        <img src={require("./images/me.PNG")} height="150px" />
        {/* <img src={url_file} height="150px" /> */}
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
          <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: "10px", height: "100%" }}
            spacing={2}
          >

            <Grid item>
              <Typography sx={{ fontWeight: "bold" }}>
                Patient Name
              </Typography>
              <Typography>
               {dc_test_info.patient?.person?.firstName + " " + dc_test_info.patient?.person?.lastName}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontWeight: "bold" }}>
              Patient's Location
              </Typography>

              <Typography>
              {dc_test_info.location}
              </Typography>

            </Grid>

            <Grid item>
              <Typography sx={{ fontWeight: "bold" }}>
              Date
              </Typography>
              <Typography>
              {String(dc_test_info.date)}
              </Typography>
            </Grid>


            <Grid item >

            </Grid>

            <Grid item>
              <Typography></Typography>
            </Grid>
          </Grid>
          </Grid>

          <Grid item>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: "10px", height: "100%" }}
            spacing={7}
          >

            <Grid item>
              <Typography sx={{ fontWeight: "bold" }}>
              Test Name
              </Typography>
              <Typography>
              {dc_test_info.dcTestList?.test?.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontWeight: "bold" }}>
              DC Name
              </Typography>

              <Typography>
               {dc_test_info.dcTestList?.dc?.name}
              </Typography>

            </Grid>

            <Grid item>
              <Typography sx={{ fontWeight: "bold" }}>
              DC Location
              </Typography>
              <Typography>
               {dc_test_info.dcTestList?.dc?.location}
              </Typography>
            </Grid>


            <Grid item >

            </Grid>

            <Grid item>
              <Typography></Typography>
            </Grid>
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

                  <Stack direction="column" alignItems="center" spacing={2}>
                    <input onChange={handleFile} type="file" />
                    <Button onClick={handleUpload} variant="contained" component="label">
                      Upload
                    </Button>
                    {/* <IconButton color="primary" aria-label="upload picture" component="label">
                      <input hidden accept="image/*" type="file" />
                      <PhotoCamera />
                    </IconButton> */}
                  </Stack>

                  <Grid item>

                    {/* <img src={url_file} height="150px" />
        <object data= {url_file} type="application/pdf" width="100%" height="100%">
      <p>Alternative text - include a link <a href= {url_file} >to the PDF!</a></p>
     </object> */}
                  </Grid>

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
