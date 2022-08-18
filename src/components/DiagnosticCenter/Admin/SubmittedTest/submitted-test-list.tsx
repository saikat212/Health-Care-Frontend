import { Button, Grid, Typography } from "@mui/material";
import Header from "components/header";
import { Link, useLocation } from "react-router-dom";
import DCAdminPageAppbar from "components/DiagnosticCenter/HompageConstruction/admin-page-appbar";
import { DC_Test, DiagnosticCenter } from "Classes/entity-class";
import { useEffect } from "react";
import React from "react";
import { API } from "API Handler/api";
import SubmittedTestListCard from "./submitted-test-list-card";


export default function SubmittedTestListUI() {

  const [dc_test_list,setDCTestList] = React.useState<DC_Test[]>();
  const [val,setval] = React.useState<number>(92);

  useEffect ( () => {
  
    
  const id = (JSON.parse(localStorage.getItem("DC") || "") as DiagnosticCenter).id || undefined;
  console.log("dc id")
  console.log(id)
  

  API.diagnosticCenter.getSubmittedRequest(id as number).then((response) =>{
   if(response.data == null)
   {
    console.log("No item here .")
   }
    setDCTestList(response.data)
    console.log("db theke asche")
    console.log(response)
    
  });

  },[]);

  return (
    <>
   <DCAdminPageAppbar/>
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
              <SubmittedTestListCard
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
