import {
    Grid,
  } from "@mui/material";
  import { useLocation, useNavigate } from "react-router-dom";

  import { GeneratePrescription } from "Classes/helper-class";
  import jsPDF from "jspdf";
  import html2canvas from 'html2canvas';
import PatientLayout from "../patient-layout";
import DoctorInPrescription from "components/Doctor/MyPatientHandler/GeneratePrescription/View Prescription/doctor-in-prescription";
import MedicineInPrescription from "components/Doctor/MyPatientHandler/GeneratePrescription/View Prescription/medicine-in-prescription";
import PatientInPrescription from "components/Doctor/MyPatientHandler/GeneratePrescription/View Prescription/patient-in-prescription";
import TestInPrescription from "components/Doctor/MyPatientHandler/GeneratePrescription/View Prescription/test-in-prescription";
  
  export default function PrescriptionPageInPatient() {
    const { state } = useLocation();
    const navigate = useNavigate();
    let generatePrescription: GeneratePrescription =
      state as GeneratePrescription;
   

    return (
      <PatientLayout>
          <Grid
           id="prescription"
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
              sx={{ backgroundColor: "white",  height: "100%" }}
              spacing={2}
            >
              <Grid item>
                <PatientInPrescription patient={generatePrescription.patient} />
              </Grid>
              <Grid item>
                <DoctorInPrescription doctor={generatePrescription.doctor} />
              </Grid>
            </Grid>
            <Grid
              item
              container
              sx={{
                backgroundColor: "#9AEDF5",
                height: "100%",
                width: "50%",
              }}
            >
              <MedicineInPrescription
                mcPresArray={generatePrescription.medPresArray}
              />
            </Grid>
            <Grid  item
              container
              sx={{
                backgroundColor: "#F8E594",
                padding: "10px",
                height: "100%",
                width: "50%",
              }}>
              <TestInPrescription
                testPresArray={generatePrescription.testPresArray}
              />
            </Grid>
          </Grid>
      </PatientLayout>
    );
  }
  
  
  