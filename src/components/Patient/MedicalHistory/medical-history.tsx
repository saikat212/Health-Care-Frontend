import { API } from "API Handler/api";
import { Appointment, Doctor, MC_Prescription, Patient, Prescription, Test_Prescription } from "Classes/entity-class";
import React, { useEffect } from "react";
import PatientLayout from "../patient-layout";

export default function MedicalHistory(){
    const [appointments, setAppointments] = React.useState<Appointment[]>([])
    const [patient, setPatient] = React.useState<Patient>();
    const [doctor, setDoctor] = React.useState<Doctor>();
    const [medPresArray, setMedPresArray] = React.useState<MC_Prescription[]>([]);
    const [testPresArray, setTestPresArray] = React.useState<Test_Prescription[]>([]);
    setPatient((JSON.parse(localStorage.getItem("Patient") || "") as Patient))
    useEffect(() => {   //Data will be loaded first time only
       API.appointment.getAppointments(patient?.id as number).then(response=>{
        console.log(response.data)
       })
      }, [])
    
    return(
        <PatientLayout>
            
        </PatientLayout>
    )
};