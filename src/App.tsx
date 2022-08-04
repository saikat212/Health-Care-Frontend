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
import DoctorHomePage from "components/Doctor/doctor-home-page";
import { SelectionAppointment } from "components/Doctor/AppointmentHandle/selection-appointment";
import { RequestedAppointmentListUI } from "components/Doctor/AppointmentHandle/requested-appointment-list";
import { SetAppointmentInfo } from "components/Doctor/AppointmentHandle/set-appointment-info";
import ComboBox from "components/Doctor/AppointmentHandle/combo-box";
import { SelectionApprovedAppointment } from "components/Doctor/MyPatientHandler/selection-approved-appointment";
import { SetSeePatientInfo } from "components/Doctor/MyPatientHandler/set-see-patient-info";
import ApprovedAppointmentList from "components/Doctor/MyPatientHandler/approved-appointment-list";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Front_Page />} />
          <Route path="/specialities" element={<SpecialitiesUI />} />
          <Route path="/doctor-list" element={<DoctorListUI />} />
          <Route path="/doctor-info" element={<DoctorInfo />} />
          <Route path="/doctor-home-page" element={<DoctorHomePage/>} />
          <Route path="/sign-up-patient" element={<SignUpPatient />} />
          <Route path="/sign-up-doctor" element={<SignUpDoctor />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/set-appointment-details" element={<SetAppointmentDetails/>}/>
           
          <Route path="/selection-appointment" element={<SelectionAppointment/>}/>
          <Route path="/requested-appointment-ui" element={<RequestedAppointmentListUI/>}/>
          <Route path="/set-appointment-info" element={<SetAppointmentInfo/>}/>
          <Route path="/approved-appointment-list" element={<ApprovedAppointmentList/>}/>
          <Route path="/selection-approved-appointment" element={<SelectionApprovedAppointment/>}/>
          <Route path="/set-see-patient-info" element={<SetSeePatientInfo/>}/>           
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
