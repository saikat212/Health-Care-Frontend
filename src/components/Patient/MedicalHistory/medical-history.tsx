import { Grid, Typography } from "@mui/material";
import { API } from "API Handler/api";
import {
  Appointment,
  Doctor,
  MC_Prescription,
  Patient,
  Prescription,
  Test_Prescription,
} from "Classes/entity-class";
import { GeneratePrescription } from "Classes/helper-class";
import React, { useEffect } from "react";
import PatientLayout from "../patient-layout";
import MedicalHistoryCard from "./medical-history-card";

export default function MedicalHistory() {
  const [appointments, setAppointments] = React.useState<Appointment[]>([]);
  const [patient, setPatient] = React.useState<Patient>();
  const [doctor, setDoctor] = React.useState<Doctor>();
  const [medPresArray, setMedPresArray] = React.useState<MC_Prescription[]>([]);
  const [testPresArray, setTestPresArray] = React.useState<Test_Prescription[]>(
    []
  );

  let generatePrescription: GeneratePrescription = new GeneratePrescription();

  useEffect(() => {
    //Data will be loaded first time only
    setPatient(JSON.parse(localStorage.getItem("Patient") || "") as Patient);
    API.appointment
      .getAppointments(
        (JSON.parse(localStorage.getItem("Patient") || "") as Patient)
          ?.id as number
      )
      .then((response) => {
        console.log(response.data);
        setAppointments(response.data);
        
      });
  }, []);

  function getMedicineTest(appt: Appointment) {
    console.log("here");
    API.medicinePres
      .getMedicine(appt.prescription?.id as number)
      .then((response) => {
        //setMedPresArray(response.data)
        generatePrescription.medPresArray = response.data;
        console.log("med: ", response.data);
      });
    API.testPres.getTest(appt.prescription?.id as number).then((response) => {
      generatePrescription.testPresArray = response.data;
      console.log("test: ", response.data);
    });
    generatePrescription.doctor = appt.doctor as Doctor;
    generatePrescription.patient = JSON.parse(
      localStorage.getItem("Patient") || ""
    ) as Patient;
    console.log("ff: ", generatePrescription);
    return generatePrescription;
  }

  return (
    <PatientLayout>
      <Grid container spacing={2}>
      {appointments.map((appt, idx) => (
          <Grid item>
            <MedicalHistoryCard
             problem={appt.problem as string} 
             date={appt.dateGivenByDoctor as Date} 
             doctor={appt.doctor as Doctor}
             gp ={getMedicineTest(appt)}
             />
          </Grid>
        ))}
      </Grid>
    </PatientLayout>
  );
}
