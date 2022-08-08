import { DoctorDetails } from "components/Doctor/doctor-details";
import ResponsiveAppBar from "components/Doctor/doctor-page-Appbar";
import Front_Page from "components/front-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "SignIn";
import SignUpDoctor from "SignUpDoctor";
import SignUpPatient from "SignUpPatient";
import { SpecialitiesUI } from "specialities";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import PatientHomepage from "components/Patient/patient-homepage";
import DoctorHomePage from "components/Doctor/doctor-home-page";
import { SelectionAppointment } from "components/Doctor/AppointmentHandle/selection-appointment";
import { RequestedAppointmentListUI } from "components/Doctor/AppointmentHandle/requested-appointment-list";
import { SetAppointmentInfo } from "components/Doctor/AppointmentHandle/set-appointment-info";
import ComboBox from "components/Doctor/AppointmentHandle/combo-box";
import { SelectionApprovedAppointment } from "components/Doctor/MyPatientHandler/selection-approved-appointment";
import { SetSeePatientInfo } from "components/Doctor/MyPatientHandler/set-see-patient-info";
import ApprovedAppointmentList from "components/Doctor/MyPatientHandler/approved-appointment-list";
import React from "react";
import Patient_Home_Page from "components/Patient/patient-homepage";
import { SnackbarProvider } from "notistack";
import SetAppointment from "components/ReferenceCode/set-appointment";
import { DoctorInfo } from "components/Doctor/doctor-info";
import { DoctorListUI } from "components/Doctor/doctor-list";
import PrescriptionPage from "components/Doctor/MyPatientHandler/GeneratePrescription/prescription-page";
import SetPrescriptionInfo from "components/Doctor/MyPatientHandler/GeneratePrescription/set-prescription-info";
import { PrescriptionListUI } from "components/Doctor/MyPatientHandler/ViewPreviousPrescription/prescription-list";
import { SelectionPrescription } from "components/Doctor/MyPatientHandler/ViewPreviousPrescription/selection-prescription";

import RequestedTestListUI from "components/DiagnosticCenter/TestRequestHandle/requested-test-list";
import SetTestInfo from "components/DiagnosticCenter/TestRequestHandle/set-test-info";
import SelectionTest from "components/DiagnosticCenter/TestRequestHandle/selection-test";
import DCHomePage from "components/DiagnosticCenter/HompageConstruction/dc-home-page";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SnackbarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/patient-home-page" element={<Patient_Home_Page />} />
            <Route path="/specialities" element={<SpecialitiesUI />} />
            <Route path="/doctor-list" element={<DoctorListUI />} />
            <Route path="/doctor-info" element={<DoctorInfo />} />
            <Route path="/doctor-home-page" element={<DoctorHomePage/>} />
            <Route path="/sign-up-patient" element={<SignUpPatient />} />
            <Route path="/sign-up-doctor" element={<SignUpDoctor />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/set-appointment-details" element={<SetAppointment />}/>
          <Route path="/selection-appointment" element={<SelectionAppointment/>}/>
          <Route path="/requested-appointment-ui" element={<RequestedAppointmentListUI/>}/>
          <Route path="/set-appointment-info" element={<SetAppointmentInfo/>}/>
          <Route path="/approved-appointment-list" element={<ApprovedAppointmentList/>}/>
          <Route path="/selection-approved-appointment" element={<SelectionApprovedAppointment/>}/>
          <Route path="/set-see-patient-info" element={<SetSeePatientInfo/>}/>   

          <Route path="/selection-prescription" element={<SelectionPrescription/>}/>  
           <Route path="/prescription-list-ui" element={<PrescriptionListUI/>}/>  
           <Route path="/prescription-page" element={<PrescriptionPage/>}/> 
           <Route path="/set-prescription-info" element={<SetPrescriptionInfo/>}/> 

           <Route path="/requested-test-list-ui" element={<RequestedTestListUI/>}/> 
           <Route path="/set-test-info" element={<SetTestInfo/>}/> 
           <Route path="/selection-test" element={<SelectionTest/>}/> 
           <Route path="/dc-home-page" element={<DCHomePage/>}/> 

          </Routes>


        </BrowserRouter>
      </SnackbarProvider>
    </LocalizationProvider>
  );
}

export default App;
