import { DoctorDetails } from "components/Doctor/doctor-details";
import ResponsiveAppBar from "components/Doctor/doctor-page-Appbar";
import Front_Page from "components/front-page";
import { DoctorInfo } from "doctor-info";
import { DoctorListUI } from "doctor-list";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "SignIn";
import SignUpDoctor from "SignUpDoctor";
import SignUpPatient from "SignUpPatient";
import { SpecialitiesUI } from "specialities";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import PatientHomepage from "components/Patient/patient-homepage";
import SetAppointmentDetails from "components/Patient/set-appointment-details";



function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Front_Page />} />
          <Route path="/specialities" element={<SpecialitiesUI />} />
          <Route path="/doctor-list" element={<DoctorListUI />} />
          <Route path="/doctor-info" element={<DoctorInfo />} />
          <Route path="/doctor-home-page" element={<ResponsiveAppBar />} />
          <Route path="/sign-up-patient" element={<SignUpPatient />} />
          <Route path="/sign-up-doctor" element={<SignUpDoctor />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/set-appointment-details" element={<SetAppointmentDetails/>}/>
          
          
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
