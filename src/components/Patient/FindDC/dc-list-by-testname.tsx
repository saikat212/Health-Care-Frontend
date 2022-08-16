import { Button, Grid, Typography } from "@mui/material";
import Header from "components/header";
import { Link, useLocation } from "react-router-dom";
import DCAdminPageAppbar from "components/DiagnosticCenter/HompageConstruction/admin-page-appbar";
import { DCTestList, DC_Test, DiagnosticCenter } from "Classes/entity-class";
import { useEffect } from "react";
import React from "react";
import { API } from "API Handler/api";
import DCListCard from "./dc-list-card";

import PatientLayout  from "../patient-layout";
import FindDCPageLayout from "./FindDCPageLayout";
import DCListCard1 from "./dc-list-card1";

export default function DCListByTestname() {
const {state} = useLocation();
console.log("ByTestname: uselocation diya receive korsi")
console.log(state);
  
 const [dc_test_list,setDCTestList] = React.useState<DCTestList[]>(state as DCTestList[]);

  useEffect ( () => {
    state &&
    setDCTestList(state as DCTestList[]);  
    
    console.log("ByTestname: useeffect :")
    console.log(dc_test_list);
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
         {dc_test_list?.map((dc_test_list_info,idx) => (
            <Grid key = {idx} item>
              <DCListCard1
              dc_test_list_info = {dc_test_list_info} 
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
   
    </>

  );
}
