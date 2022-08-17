import {
    Grid,
    Typography,
    Rating,
    Stack,
    Button,
    TextField,
  } from "@mui/material";
  import { Appointment, DCTestList, DC_Test, Doctor, Patient } from "Classes/entity-class";
  import { useLocation, useNavigate } from "react-router-dom";
  import { useEffect, useState } from "react";
  import React from "react";
  import { DatePicker } from "@mui/x-date-pickers";
  import PatientAppbar from "components/Patient/patient-appbar";
  import PatientLayout from "components/Patient/patient-layout";
  import SetInfo from "./set-info";
  
  export default function PreviousPageSetInfo() {
    const navigate = useNavigate();
    const {state} = useLocation();
    

    const [dc_test_list,setDCTestList] = React.useState<DCTestList>(state as DCTestList);

    // console.log("PreviousSetInfo: state = ?")
    // console.log(state)
    
    useEffect(() => {
    console.log("PreviousSetInfo: useeffect") 
     console.log("PreviousSetInfo: state = ?")
     console.log(state)
      //Data will be loaded first time only
    state && setDCTestList(state as DCTestList);
    console.log("PreviousSetInfo: set korar por value koto : dc_test_list ? ")
    console.log(dc_test_list)
    }, [state]);

  
    return (
      <PatientLayout>
       <SetInfo
       dc_test_list = {dc_test_list} 
       /> 
      </PatientLayout>
    );
  }
  