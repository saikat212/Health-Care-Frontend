import { ButtonGroup, Button } from "@mui/material";
import { ContentSelectedAppointment } from "./content-selected-appointment";
import ResponsiveAppBar from "../doctor-page-Appbar";
export function SelectionAppointment(){
    return (
        <>
        <ResponsiveAppBar/>
        <ContentSelectedAppointment/>
        </>
    );
}