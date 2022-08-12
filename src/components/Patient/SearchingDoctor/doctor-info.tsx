import { ButtonGroup, Button } from "@mui/material";
import React, { useEffect } from "react";
import BasicTabs from "components/basic-tab";
import { DoctorDetails_Get_Appointment } from "./doctor-details-get-appointment";
import { Doctor } from "Classes/entity-class";
import { useLocation } from "react-router-dom";
import PatientLayout from "components/Patient/patient-layout";


export function DoctorInfo(){
    const {state}= useLocation();
    const [doc, setDoctor] = React.useState<Doctor>(new Doctor());

    useEffect(() => {   //Data will be loaded first time only
        state && setDoctor(state as Doctor);
      }, [])
  
    return (
        <PatientLayout>
        <DoctorDetails_Get_Appointment
        doctor = {doc} 
        />
        </PatientLayout>
       
    );
}

