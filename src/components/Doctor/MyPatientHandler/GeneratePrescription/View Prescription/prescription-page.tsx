import { Grid, Typography, Rating, Stack, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ResponsiveAppBar from "components/Doctor/doctor-page-Appbar";
import DCTestList from "../dc-test-list";
import MedicineList from "../medicine-list";
import DoctorLayout from "components/Doctor/doctor-layout";
import {
  Doctor,
  MC_Prescription,
  Patient,
  Test_Prescription,
} from "Classes/entity-class";
import { useEffect } from "react";
import { GeneratePrescription } from "Classes/helper-class";
import PatientInPrescription from "./patient-in-prescription";
import DoctorInPrescription from "./doctor-in-prescription";
import MedicineInPrescription from "./medicine-in-prescription";
import TestInPrescription from "./test-in-prescription";
export default function PrescriptionPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  let generatePrescription: GeneratePrescription =
    state as GeneratePrescription;
  console.log("gp2: ", generatePrescription);

  return (
    <DoctorLayout>
      <Grid
        container
        direction="column"
        //alignItems="center"
        justifyContent="space-between"
        sx={{ backgroundColor: "white", padding: "10px", height: "100%" }}
        spacing={2}
      >
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ backgroundColor: "white", padding: "10px", height: "100%" }}
          spacing={2}
        >
          <Grid item>
            <PatientInPrescription patient={generatePrescription.patient} />
          </Grid>
          <Grid item>
            <DoctorInPrescription doctor={generatePrescription.doctor} />
          </Grid>
        </Grid>
        <Grid item container
         sx={{ backgroundColor: "white", padding: "10px", height: "100%", width: "50%" }}
        >
          <MedicineInPrescription
            mcPresArray={generatePrescription.medPresArray}
          />
        </Grid>
        <Grid item container>
          <TestInPrescription
            testPresArray={generatePrescription.testPresArray}
          />
        </Grid>
      </Grid>
    </DoctorLayout>
  );
}
