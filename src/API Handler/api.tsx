
import axios from "axios";
import {
  Doctor,
  Patient,
  _Rating,
  Speciality,
  Appointment,
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
    updatePatientByHeightWeight: (height: number, weight: number) =>
      put("/updatePatient", { h: height, w: weight }),
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
  },
};
