import { ButtonGroup, Button } from "@mui/material";
import BasicTabs from "components/basic-tab";
import { DoctorDetails } from "components/Doctor/doctor-details";
import { DoctorDetails_Get_Appointment } from "components/Doctor/doctor-details-get-appointment";

export function DoctorInfo(){
    return (
        <><DoctorDetails_Get_Appointment />
         <BasicTabs />
        </>
    );
}