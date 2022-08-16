import {
  ButtonGroup,
  Button,
  Grid,
  Typography,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ChooseMedicine from "./choose-medicine";
import ChooseDose from "./choose-dose";
import ChooseDCTest from "./choose-dc-test";
import { useLocation, useNavigate } from "react-router-dom";
import DoctorLayout from "components/Doctor/doctor-layout";
import {
  Appointment,
  Doctor,
  MC_Prescription,
  Patient,
  Prescription,
  Test_Prescription,
} from "Classes/entity-class";
import React, { useState, useEffect } from "react";
import ChooseDuration from "./choose-duration";
import { API } from "API Handler/api";
import { GeneratePrescription, showSnackbar } from "Classes/helper-class";
//import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
//import ReactPDF from "@react-pdf/renderer";

export default function SetPrescriptionInfo() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [appointment, setAppointment] = React.useState<Appointment>();
  const [prescription, setPrescription] = React.useState<Prescription>();
  const [med_pres, setMedPres] = React.useState<MC_Prescription>();
  const [test_pres, setTestPres] = React.useState<Test_Prescription>();

  const [medPresArray, setMedPresArray] = React.useState<MC_Prescription[]>([]);
  const [testPresArray, setTestPresArray] = React.useState<Test_Prescription[]>([]);

  /* const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });
  
  // Create Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
 */
  function handleAddMedicine() {
    console.log("mehedi")
    /* API.medicinePres.saveMedic
    ine(med_pres as MC_Prescription).then(response=>{
        console.log(response.data);
      }) */
    //showSnackbar(enqueueSnackbar, "Medicine successfully added to prescription", () => {})
    //@ts-ignore
    setMedPres({...med_pres,
      prescription:prescription
    })
    //@ts-ignore
    setMedPresArray([...medPresArray,{...med_pres,
      prescription:prescription
    }])
    //localStorage.setItem("MC_Prescription",JSON.stringify(med_pres))
  }
  function handleAddTest() {
    /*    API.testPres.saveTest(test_pres as Test_Prescription).then(response =>{
      console.log(response.data)
    }) 
    
    localStorage.setItem("Test_Prescription",JSON.stringify(test_pres))  */
    //showSnackbar(enqueueSnackbar, "Test successfully added to prescription", () => {})
    setTestPres({
      ...test_pres,
      prescription:prescription
    })
    //@ts-ignore
    setTestPresArray([...testPresArray,{
      ...test_pres,
      prescription:prescription
    }])
  }
   function handleUpload(){
    
    console.log("Med-array",medPresArray)
    console.log("test-array",testPresArray)

    localStorage.setItem("MedicineInPrescription",JSON.stringify(medPresArray))
    localStorage.setItem("TestInPrescription",JSON.stringify(testPresArray))

    API.medicinePres.saveMedicine(medPresArray).then(response=>{

    });
    API.testPres.saveTest(testPresArray).then(response=>{
      
    });
    console.log("test0")
    let generatePrescription : GeneratePrescription = new GeneratePrescription()
    console.log("test")
    generatePrescription.patient = (JSON.parse(localStorage.getItem("Patient") || "") as Patient)
    generatePrescription.doctor = (JSON.parse(localStorage.getItem("Doctor") || "") as Doctor)
    generatePrescription.medPresArray = medPresArray
    generatePrescription.testPresArray = testPresArray
    
    console.log("gp: ",generatePrescription)
    
    navigate("/prescription-page",{state:generatePrescription})

  } 

  useEffect(() => {
    state && setAppointment(state as Appointment);
    console.log("Appt: ", state as Appointment);
    setPrescription({
      ...prescription,
      problem: (state as Appointment).problem,
      appointment: state as Appointment,
    });
        API.prescription.savePrescription({
      ...prescription,
      problem: (state as Appointment).problem,
      appointment: (state as Appointment),
    }).then(response=>{
      console.log("Pres: "+response.data)
      setPrescription({
        ...prescription,
        id:response.data.id
      })
    })   
    /*  localStorage.setItem(
      "Prescription",
      JSON.stringify({
        ...prescription,
        problem: appointment.problem,
        appointment: appointment,
      })
    ); */
  }, [state]);

  return (
    <DoctorLayout>
      <Grid //Whole container
        container
        direction="row"
        alignItems="center"
        sx={{ padding: "40px", height: "100%" }}
        spacing={3}
      >
        <Grid item>
          <Grid //Left column
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: "40px", height: "100%" }}
            spacing={2}
          >
            <Grid item>
              <ChooseMedicine
                onChange={(value) => {
                  setMedPres({
                    ...med_pres,
                    medicine: value,
                  });
                  console.log("val: ", value);
                  console.log("med: ", med_pres);
                }}
              />
            </Grid>
            <Grid item>
              <ChooseDose
                onChange={(value) => {
                  setMedPres({
                    ...med_pres,
                    dose: value,
                  });
                  console.log("dose: ", med_pres);
                  console.log("val: ", value);
                }}
              />
            </Grid>
            <Grid item>
              <ChooseDuration
                onChange={(value) => {
                  setMedPres({
                    ...med_pres,
                    duration: value,
                  });
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleAddMedicine}>
                Add Medicine
              </Button>
            </Grid>
            <Grid item>
              <ChooseDCTest
                onChange={(value) => {
                  setTestPres({
                    ...test_pres,
                    test: value,
                  });
                  console.log("test: ", test_pres);
                  console.log("val: ", value);
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleAddTest}>
                Add Test
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleUpload}>Upload Prescription</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid //Right column
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: "40px", height: "100%" }}
            spacing={2}
          >
            <Grid item>
              <Typography>Prescription</Typography>
            </Grid>
            <Grid item>
             {/*   <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {medPresArray.map((value) => (
                  <ListItem
                    key={value.medicine?.name}
                    disableGutters
                  >
                    <ListItemText primary={`${value.medicine?.name}`} />
                  </ListItem>
                ))}
              </List>  */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DoctorLayout>
  );
}
function enqueueSnackbar(enqueueSnackbar: any, arg1: string, arg2: () => void) {
  throw new Error("Function not implemented.");
}

