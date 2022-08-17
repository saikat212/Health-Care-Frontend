import { Button, Grid, Typography } from "@mui/material";
import Header from "components/header";
import { Link, useLocation } from "react-router-dom";
import DCAdminPageAppbar from "components/DiagnosticCenter/HompageConstruction/admin-page-appbar";
import { DC_Test, DiagnosticCenter } from "Classes/entity-class";
import { useEffect } from "react";
import React from "react";
import { API } from "API Handler/api";
import DCListCard from "./dc-list-card";

import PatientLayout  from "../patient-layout";
import FindDCPageLayout from "./FindDCPageLayout";
export default function AllDCListUI() {

  const [dc_list,setDCList] = React.useState<DiagnosticCenter[]>();

  useEffect ( () => {
  API.diagnosticCenter.getAllDC().then((response) =>{
   if(response.data == null)
   {
    console.log("No item here .")
   }
    setDCList(response.data)
    console.log(response)
    
  });

  },[]);

  return (
    <>
   <FindDCPageLayout/>
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
         {dc_list?.map((dc_info,idx) => (
            <Grid key = {idx} item>
              <DCListCard
              dc_info = {dc_info}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
   
    </>

  );
}
