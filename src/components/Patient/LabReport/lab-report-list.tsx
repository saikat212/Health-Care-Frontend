import { Button, Grid, Typography } from "@mui/material";
import Header from "components/header";
import { Link, useLocation } from "react-router-dom";
import DCAdminPageAppbar from "components/DiagnosticCenter/HompageConstruction/admin-page-appbar";
import { DCTestList, DC_Test, DiagnosticCenter, Patient } from "Classes/entity-class";
import { useEffect } from "react";
import React from "react";
import { API } from "API Handler/api";


import PatientLayout  from "../patient-layout";

import LabReportCard from "./lab-report-card";
export default function LabReportListUI() {
  
  const [dc_test_info_list,setDCTestInfoList] = React.useState<DC_Test[]>();

  const id = (JSON.parse(localStorage.getItem("Patient")||"") as Patient).id || undefined;  
  console.log("patient id ")
  console.log(id)

  useEffect ( () => {

  const id = (JSON.parse(localStorage.getItem("Patient")||"") as Patient).id || undefined;  
  console.log("patient id ")
  console.log(id)


  API.diagnosticCenter.getLabReport(id as number).then((response) =>{
   if(response.data == null)
   {
    console.log("No item here .")
   }
    setDCTestInfoList(response.data)
    console.log("lab reports from db: ")
    console.log(response)
  });

  },[]);

  return (
    <>
   <PatientLayout children={undefined}/>

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
         {dc_test_info_list?.map((dc_test_info,idx) => (
            <Grid key = {idx} item>
              <LabReportCard
              dc_test_info = {dc_test_info}  //one row
              
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
   
    </>

  );
}
