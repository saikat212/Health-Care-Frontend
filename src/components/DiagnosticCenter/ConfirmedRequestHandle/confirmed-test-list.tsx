import { Button, Grid, Typography } from "@mui/material";
import Header from "components/header";
import { Link, useLocation } from "react-router-dom";
import AppointmentListCard from "./confirmed-test-list-card";
import DCUserPageAppbar from "../HompageConstruction/dc-user-page-appbar";
import ConfirmedTestListCard from "./confirmed-test-list-card";
import { DC_Test } from "Classes/entity-class";
import { useEffect } from "react";
import React from "react";
import { API } from "API Handler/api";

export default function ConfirmedTestListUI() {

  const [dc_test_list,setDCTestList] = React.useState<DC_Test[]>();

  useEffect ( () => {
  API.diagnosticCenter.getConfirmedRequest().then((response) =>{
   if(response.data == null)
   {
    console.log("No item here .")
   }
    setDCTestList(response.data)
    console.log(response)
    
  });

  },[]);

  return (
    <>
   <DCUserPageAppbar/>
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ backgroundColor: "yellow", padding: "10px", height: "100%" }}
      spacing={2}
    >
 
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ backgroundColor: "blue", padding: "10px", height: "100%" }}
          spacing={5}
        >
         {dc_test_list?.map((dc_test,idx) => (
            <Grid key = {idx} item>
              <ConfirmedTestListCard
              dc_test_info = {dc_test}
              />

            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
   
    </>

  );
}
