import axios from "axios";
import {
  Doctor,
  Patient,
  _Rating,
  Speciality,
  Appointment,
  _Notification,
  Prescription,
  MC_Prescription,
  Test_Prescription,
  Taker,
  DC_Test,
  DiagnosticCenter,
  DCTestList,
} from "Classes/entity-class";

const HOST = "http://localhost:5052";

function post(url, body = {}, param = {}) {
  return axios.post(HOST + url, body);
}
function postParam(url, param) {
  return post(url, {}, param);
}
function postBody(url, body) {
  return post(url, body);
}
function postUrl(url) {
  return axios.post(HOST + url);
}
function get(url, param = {}) {
  return axios.get(HOST + url);
}
function put(url, body) {
  return axios.put(HOST + url, body);
}
function del(url, body = {}) {
  return axios.delete(HOST + url, body);
}

export const API = {
  signInAuthentication: {
    register: (email: string, password: string) =>
      postBody("/verify-user", { email: email, password: password }),
    confirmAdmin: (token: string) =>
      postParam("/confirm-user", { token: token }),
    login: (email: string, password: string) =>
      postBody("/authenticate-user", { email: email, password: password }),
  },
  patient: {
    addPatient: (patient: Patient) => post("/addPatient", patient),
    getPatientById: (id: number) => get("/patient-id/" + id),
    updatePatientByHeightWeight: (patient:Patient) =>
      put("/updatePatientByHeightWeight", patient),
  },
  doctor: {
    addDoctor: (doctor: Doctor) => post("/addDoctor", doctor),
    getDoctorById: (id: number) => get("/doctor-id/" + id),
    getDoctorByFirstName: (firstName: string) =>
      get("/get-doctor-by-first-name/" + firstName),
    getDoctorByLastName: (lastName: string) =>
      get("/get-doctor-by-first-name/" + lastName),
    getDoctorsBySpeciality: (id: number) =>
      get("/get-doctor-by-speciality/" + id),
    updateVisitingTime:(doctor:Doctor) =>
      put("/updateVisitingTime",doctor)
  },
  person: {
    getPersonById: (id: number) => get("/get-person-by-id/" + id),
    getPersonByMail: (mail: string) => get("/get-person-by-mail/" + mail),
  },
  speciality: {
    getSpecialities: () => get("/get-all-specialities/"),
  },
  rating: {
    giveRating: (rating: _Rating) => post("/addRating", rating),
  },
  appointment: {
    saveAppointment: (appointment: Appointment) =>
      post("/save-appointment", appointment),
    getAppointmentList: (id: string, status: string) =>
      postBody("/get-AppointmentList", { id: id, status: status }),
    confirmAppointment: (appointment: Appointment) =>
      put("/appointment-confirmation", appointment), // ask to sakib
  },
  notification: {
    saveNotification: (notify: _Notification) =>
      post("/save-notification", notify),
    getNotification : (id : number) => get("/get-all-notification/"+id),
    updateNotification : (notification:_Notification) => put("/update-notification",notification),
    changeStatus: (id: number) => post("/change-status",id)
  },
  prescription:{
    savePrescription: (pres: Prescription) => post("/save-prescription",pres)
  },
  medicinePres:{
    saveMedicine: (med: MC_Prescription[]) => post("/save-medicine-pres",med)
  },
  testPres:{
    saveTest: (test: Test_Prescription[]) => post ("/save-test-pres",test)
  },
  medicine:{
    getAllMedicine: ()=> get("/get-all-medicine")
  },
  test:{
    getAllTest : ()=> get("/get-all-test")
  },

  taker: {
    addTaker: (taker:Taker) => post("/addTaker",taker),
    getTakerById: (id:number) => get("/taker-id/"+id),
  },
  
  takerSpeciality: {
    getTakerSpeciality: () => get("/get-all-takerspecility/"),
  },

  
  diagnosticCenter:
  {
    addDCTest: (dc_test:DC_Test) => post("/addDCTest",dc_test),
    getAllRequest: () => get("/get-all-request"),
    getPendingRequest: () => get("/get-pending-request"),
    getConfirmedRequest: (id:number) => get("/get-confirmed-request/"+id),
    getSubmittedRequest: (id:number) => get("/get-submitted-request/"+id),
    getAllDC: () => get ("/get-all-dc-list"),
    addDC: (dcObject :DiagnosticCenter) => post("/addDC",dcObject),
    getDCByAdminId: (id:number) => get("/get-dc-by-admin-id/"+id),
    getOffsitePending: () => get("/get-offsite-pending"),

  },

  dcTestList:
  {
    addDCTestList: (dcTestList:DCTestList) => post("/addDCTestList",dcTestList),
    getAllDCTestList: () => get ("/get-all-dc-test-list"),
    getDCByTestName : (testname:string) => get ("/get-dc-by-testname/"+testname),
    
  },



  // admin: {
  //   addAdmin: (admin:DCAdmin) => post("/addDCAdmin",admin),

  // },


};
