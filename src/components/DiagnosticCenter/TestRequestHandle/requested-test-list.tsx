import { Button, Grid, Typography } from "@mui/material";
import Header from "components/header";
import { Link } from "react-router-dom";
import AppointmentListCard from "./test-list-card";
import DCUserPageAppbar from "../HompageConstruction/dc-user-page-appbar";
import TestListCard from "./test-list-card";
import { DC_Test } from "Classes/entity-class";
import React, { useEffect } from "react";
import { API } from "API Handler/api";

export default function RequestedTestListUI() {
  
  const [dc_test_list,setDCTestList] = React.useState<DC_Test[]>();

  useEffect ( () => {
  API.diagnosticCenter.getPendingRequest().then((response) =>{

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
          {/* {Array.from(Array(10).keys()).map((i, idx) => (
            <Grid key={idx} item>
            
              <TestListCard
                title="Card Tittle"
                description="Necessary description"
                image={require("./images/doctor.jpg")}
      
              />
        
            </Grid>
          ))}
 */}

          {dc_test_list?.map((dc_test,idx) => (
            <Grid key = {idx} item>
              <TestListCard
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
