import { DoctorDetails } from "components/Doctor/doctor-details";
import ResponsiveAppBar from "components/Doctor/doctor-page-Appbar";
import Front_Page from "components/front-page";
import { DoctorInfo } from "components/Doctor/doctor-info";
import { DoctorListUI } from "components/Doctor/doctor-list";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "SignIn";
import SignUpDoctor from "SignUpDoctor";
import SignUpPatient from "SignUpPatient";
import { SpecialitiesUI } from "specialities";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import PatientHomepage from "components/Patient/patient-homepage";
import React from "react";
import Patient_Home_Page from "components/Patient/patient-homepage";
import { SnackbarProvider } from "notistack";
import SetAppointment from "components/ReferenceCode/set-appointment";

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
            <Route path="/doctor-home-page" element={<ResponsiveAppBar />} />
            <Route path="/sign-up-patient" element={<SignUpPatient />} />
            <Route path="/sign-up-doctor" element={<SignUpDoctor />} />
            <Route path="/" element={<SignIn />} />
            <Route
              path="/set-appointment-details"
              element={<SetAppointment />}
            />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </LocalizationProvider>
  );
}

export default App;
