import { Grid, Typography, Rating, Stack } from "@mui/material";
import { DC_Test, Doctor, Taker, _Notification } from "Classes/entity-class";

import * as React from 'react';
import Button from '@mui/material/Button';
import { API } from "API Handler/api";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import id from "date-fns/esm/locale/id/index.js";



export  function TestDetails({dc_test_info}:{dc_test_info:DC_Test}) {
  const [dc_test,setDCTest] = React.useState<DC_Test>();
  const [notification, setNotification] = React.useState<_Notification>(
    new _Notification()
  );
  
  const navigate = useNavigate();


  const handleConfirm = (e) => {
    e.preventDefault();

    dc_test_info.status = "completed"

    // dc_test_info.taker = new Taker()
    // dc_test_info.taker.id = (JSON.parse(localStorage.getItem("Taker")||"") as Taker).id || undefined;

    API.diagnosticCenter.addDCTest( dc_test_info

      // {
       
      //   taker :
      //   {
      //     ...dc_test_info?.taker, id:(JSON.parse(localStorage.getItem("Taker")||"") as Taker).id || undefined
          
      //   }
        
      // }
      
      ).then((response) => {
      console.log(response);
      console.log("yes1.");
      navigate("/offsite-requested-test-list-ui")
    });

    setNotification({
      ...notification,
      receiver: dc_test_info.patient?.person,
      type: "Offsite DC Test Request is Approved ",
      message: " DC : "+ dc_test_info.dcTestList?.dc?.name + " ( DC Contact : "+ dc_test_info.dcTestList?.dc?.person?.mobileNo+" )" ,
      status: "approved",
    });
    API.notification.saveNotification({
      ...notification,
      receiver: dc_test_info.patient?.person,
      type: "Offsite DC Test Request is Approved ",
      message: " DC : "+ dc_test_info.dcTestList?.dc?.name + " ( DC Contact : "+ dc_test_info.dcTestList?.dc?.person?.mobileNo+" )" ,
      status: "approved",
    }).then((response) => {
      console.log(response);
    });

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
        <Grid item>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: "10px", height: "100%" }}
          spacing={12}
        >
          <Grid item>
            <Typography sx={{ fontWeight: "bold" }}>
              Patient Name
            </Typography>
            <Typography>
             {dc_test_info.patient?.person?.firstName +" "+ dc_test_info.patient?.person?.lastName} 
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
            {get_Date(dc_test_info.date?.toString() as string)}
            </Typography>
          </Grid>


         
        </Grid>

        <Grid item >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: "10px", height: "100%" }}
          spacing={12}
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
                 <Button  onClick={handleConfirm}  variant="contained" >
                 Confirm
                </Button>
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


