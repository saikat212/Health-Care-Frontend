import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "SignIn";
import SignUpDoctor from "SignUpDoctor";
import SignUpPatient from "SignUpPatient";
import { SpecialitiesUI } from "specialities";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import PatientHomepage from "components/Patient/patient-homepage";
import DoctorHomePage from "components/Doctor/doctor-home-page";
import { RequestedAppointmentListUI } from "components/Doctor/AppointmentHandle/requested-appointment-list";
import { SetAppointmentInfo } from "components/Doctor/AppointmentHandle/set-appointment-info";
import ComboBox from "components/Doctor/AppointmentHandle/combo-box";
import { SetSeePatientInfo } from "components/Doctor/MyPatientHandler/set-see-patient-info";
import ApprovedAppointmentList from "components/Doctor/MyPatientHandler/approved-appointment-list";
import React from "react";
import Patient_Home_Page from "components/Patient/patient-homepage";
import { SnackbarProvider } from "notistack";
import SetAppointment from "components/SeekAppointment/set-appointment";
import PrescriptionPage from "components/Doctor/MyPatientHandler/GeneratePrescription/View Prescription/prescription-page";
import SetPrescriptionInfo from "components/Doctor/MyPatientHandler/GeneratePrescription/set-prescription-info";
import { PrescriptionListUI } from "components/Doctor/MyPatientHandler/ViewPreviousPrescription/prescription-list";
import { SelectionPrescription } from "components/Doctor/MyPatientHandler/ViewPreviousPrescription/selection-prescription";

import RequestedTestListUI from "components/DiagnosticCenter/TestRequestHandle/requested-test-list";
import SetTestInfo from "components/DiagnosticCenter/TestRequestHandle/set-test-info";
import SelectionTest from "components/DiagnosticCenter/TestRequestHandle/selection-test";
import DCHomePage from "components/DiagnosticCenter/HompageConstruction/dc-home-page";
import SelectionConfirmedTest from "components/DiagnosticCenter/ConfirmedRequestHandle/selection-confirmed-test";

import ConfirmedTestListUI from "components/DiagnosticCenter/ConfirmedRequestHandle/confirmed-test-list";
import { ContentCopy } from "@mui/icons-material";
import { ContentSelectedApprovedAppointment } from "components/Doctor/MyPatientHandler/content-selected-approved-appointment";
import SignUpTaker from "SignUpTaker";
import SignUpAdmin from "SignUpAdmin";
import DCAdminHomePage from "components/DiagnosticCenter/HompageConstruction/admin-home-page";
import VisitingTime from "components/Doctor/visiting-time";
import { DoctorInfo } from "components/Patient/SearchingDoctor/doctor-info";
import { DoctorListUI } from "components/Patient/SearchingDoctor/doctor-list";
import SubmittedTestListUI from "components/DiagnosticCenter/Admin/SubmittedTest/submitted-test-list";
import OffsiteRequestedTestListUI from "components/DiagnosticCenter/Admin/OffsitePendingTest/TestRequestHandle/offsite-requested-test-list";

import AllDCListUI from "components/Patient/FindDC/all-dc-list";
import TestListUI from "components/Patient/FindDC/test-list";

//Find DC
import SetInfo from "components/Patient/FindDC/DCTestRequest/set-info";
import SetDCAppointment from "components/Patient/FindDC/DCTestRequest/set-dc-appointment";
import PreviousPageSetInfo from "components/Patient/FindDC/DCTestRequest/previous-page-set-info";
import DCListByTestname from "components/Patient/FindDC/dc-list-by-testname";
import DCSearchPage from "components/Patient/FindDC/dc-search-page";
import { UploadPage } from "components/DiagnosticCenter/Admin/SubmittedTest/upload-page";
import MedicalHistory from "components/Patient/MedicalHistory/medical-history";
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SnackbarProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<SignIn />} />
            <Route path="/patient-home-page" element={<Patient_Home_Page />} />
            <Route path="/specialities" element={<SpecialitiesUI />} />
            <Route path="/doctor-list" element={<DoctorListUI />} />
            <Route path="/doctor-info" element={<DoctorInfo />} />
            <Route path="/doctor-home-page" element={<DoctorHomePage/>} />
            <Route path="/sign-up-patient" element={<SignUpPatient />} />
            <Route path="/sign-up-doctor" element={<SignUpDoctor />} />
            <Route path="/medical-history" element={<MedicalHistory /> }/>
           
          <Route path="/set-appointment-details" element={<SetAppointment />}/>
          <Route path="/requested-appointment-ui" element={<RequestedAppointmentListUI/>}/>
          <Route path="/set-appointment-info" element={<SetAppointmentInfo/>}/>
          <Route path="/set-visiting-time" element={<VisitingTime/>}/>
          <Route path="/approved-appointment-list" element={<ApprovedAppointmentList/>}/>
          <Route path="/set-see-patient-info" element={<SetSeePatientInfo/>}/>   
          <Route path ="/selection-approved-appointment" element={<ContentSelectedApprovedAppointment/>}/>
          <Route path="/selection-prescription" element={<SelectionPrescription/>}/>  
           <Route path="/prescription-list-ui" element={<PrescriptionListUI/>}/>  
           <Route path="/prescription-page" element={<PrescriptionPage/>}/> 
           <Route path="/set-prescription-info" element={<SetPrescriptionInfo/>}/> 

           <Route path="/requested-test-list-ui" element={<RequestedTestListUI/>}/> 
           <Route path="/set-test-info" element={<SetTestInfo/>}/> 
           <Route path="/selection-test" element={<SelectionTest/>}/> 
           <Route path="/dc-home-page" element={<DCHomePage/>}/> 

           <Route path="/confirmed-test-list-ui" element={<ConfirmedTestListUI/>}/> 
           <Route path="/selection-confirmed-test" element={<SelectionConfirmedTest/>}/> 
           <Route path="/sign-up-taker" element={<SignUpTaker/>}/> 

           <Route path="/sign-up-admin" element={<SignUpAdmin/>}/> 
           <Route path="/dc-admin-home-page" element={<DCAdminHomePage/>}/> 
           <Route path="/submitted-test-list-ui" element={<SubmittedTestListUI/>}/>
           <Route path="/offsite-requested-test-list-ui" element={<OffsiteRequestedTestListUI/>}/>
           <Route path="/all-dc-list-ui" element={<AllDCListUI/>}/> 
           <Route path="/test-list-ui" element={<TestListUI/>}/>

           //Find DC 
           {/* <Route path="/set-info" element={<SetInfo/>}/>  */}
           <Route path="/set-dc-appointment" element={<SetDCAppointment/>}/> 
           <Route path="/previous-page-set-info" element={<PreviousPageSetInfo/>}/> 
           <Route path="/dc-list-by-testname" element={<DCListByTestname/>}/>
           <Route path="/dc-search-page" element={<DCSearchPage/>}/>
           <Route path="/upload-page" element={<UploadPage/>}/>        
           
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </LocalizationProvider>
  );
}

export default App;
