import { ButtonGroup, Button, Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "components/Doctor/doctor-page-Appbar";
import ChooseMedicine from "./choose-medicine";
import ChooseDose from "./choose-dose";
import ChooseDCTest from "./choose-dc-test";
import { useLocation, useNavigate } from "react-router-dom";
import DoctorLayout from "components/Doctor/doctor-layout";
import {
  Appointment,
  MC_Prescription,
  Prescription,
  Test_Prescription,
} from "Classes/entity-class";
import React, { useState, useEffect } from "react";
import { API } from "API Handler/api";

export default function SetPrescriptionInfo() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [appointment, setAppointment] = React.useState<Appointment>(
    new Appointment()
  );
  const [prescription, setPrescription] = React.useState<Prescription>();
  const [med_pres, setMedPres] = React.useState<MC_Prescription>();
  const [test_pres, setTestPres] = React.useState<Test_Prescription>();

   function handleAddMedicine(){
      /*  API.medicinePres.saveMedicine(med_pres as MC_Prescription).then(response=>{
        console.log(response.data);
      }) 
      localStorage.setItem("MC_Prescription",JSON.stringify(med_pres)) */
  }
  function handleAddTest(){
  /*   API.testPres.saveTest(test_pres as Test_Prescription).then(response =>{
      console.log(response.data)
    }) 
    localStorage.setItem("Test_Prescription",JSON.stringify(test_pres)) */
  } 

   useEffect(() => {
    state && setAppointment(state as Appointment);
    setPrescription({
      ...prescription,
      problem: appointment.problem,
      appointment: appointment,
    }); 
    localStorage.setItem("Prescription",JSON.stringify({...prescription,
      problem: appointment.problem,
      appointment: appointment
       }))
  }, [state]); 

  return (
    <DoctorLayout>
      <Grid //Whole container
        container
        direction="row"
        alignItems="center"
        sx={{ padding: "100px", height: "100%" }}
        spacing={2}
      >
        <Grid item>
          <Grid //Left column
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: "100px", height: "100%" }}
            spacing={2}
          >
            <Grid item>
              <Grid //Handle Medicine
                container
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: "100px", height: "100%" }}
                spacing={2}
              >
                <Grid item>
                   <ChooseMedicine 
                   onChange={(value) =>{
                      /*  setMedPres({
                        ...med_pres,
                        medicine:value
                      })  */
                      console.log(value)
                  } 
                }
                  /> 
                </Grid>
                <Grid item>
                   <ChooseDose
                    onChange={(value) => {
                       /* setMedPres({
                        ...med_pres,
                        dose:value
                      })  */
                      console.log(value)
                    }}
                  /> 
                </Grid>
                <Button variant="contained" onClick={handleAddMedicine}>
                  Add Medicine
                </Button>
              </Grid>
            </Grid>

            <Grid item>
              <Grid //Handle Test
                container
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: "100px", height: "100%" }}
                spacing={2}
              >
                <Grid item>
               <ChooseDCTest 
                  onChange={(value) =>{
                    /*    setTestPres({
                        ...test_pres,
                        test:value
                      })  */
                      console.log(value)
                  }
                }
                /> 
                </Grid>
                <Button variant="contained" onClick={handleAddTest}>Add Test</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid //Right column
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: "100px", height: "100%" }}
            spacing={2}
          >
            <Grid item>
              <Typography>Hiii</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DoctorLayout>
  );
}
