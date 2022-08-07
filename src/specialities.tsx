import {
  AppBar,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { API } from "API Handler/api";
import { Speciality } from "Classes/entity-class";
import Header from "components/header";
import PatientLayout from "components/Patient/patient-layout";
import SearchBar from "components/search-bar";
import SpecialityCard from "components/speciality-card";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
/* function LoopLoop(){
    let jsx = "";
    let i;
    for(i=0; i<100; i++){
        jsx += 
    }


} */
export function SpecialitiesUI() {
  const [state,setState] = React.useState<Speciality[]>();
  
  useEffect(() => {   //Data will be loaded first time only
    API.speciality.getSpecialities().then(response=>{
      setState(response.data);
   })
  }, [])

  

  return (
    <PatientLayout>
    <Grid container spacing={2} sx={{ backgroundColor: "gray" }}>
     
      <Grid item>
        <Grid container spacing={2}>
          {state?.map((speciality, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4} lg={3} xl={2}>
               
              <SpecialityCard 
                spec={speciality} />
          
            </Grid>
          ))}
        </Grid>
      </Grid>

    </Grid>
    </PatientLayout>
  );
}
