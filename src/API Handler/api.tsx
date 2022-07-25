import axios from "axios";
import { Doctor, Patient } from "Classes/patient-class";




const HOST = "http://localhost:5052";

function post(url, body = {}, param = {}) {
  return axios.post(HOST + url , body);
}
function postParam(url, param) {
  return post(url, {}, param);
}
function postBody(url, body) {
  return post(url, body);
}
function get(url, param = {}) {
  return axios.get(HOST + url );
}

export const API = {
    patient:{
    addPatient:(patient:Patient) => post("/addPatient",patient),
    getPatientById:(id:number) => get("/patient-id/"+id),
    },
    doctor:{
        addDoctor:(doctor:Doctor) => post("/addDoctor",doctor),
        getDoctorById:(id:number) => get("/doctor-id/"+id),
        getDoctorByFirstName: (firstName: string) => get("/get-doctor-by-first-name/"+firstName),
        getDoctorByLastName: (lastName: string) => get("/get-doctor-by-first-name/"+lastName),

    },
    

}