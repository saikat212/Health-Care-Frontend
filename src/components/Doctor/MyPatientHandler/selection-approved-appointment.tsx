import { ButtonGroup, Button } from "@mui/material";
import { ContentSelectedApprovedAppointment } from "./content-selected-approved-appointment";
import ResponsiveAppBar from "../doctor-page-Appbar";
export function SelectionApprovedAppointment(){
    return (
        <>
        <ResponsiveAppBar/>
        <ContentSelectedApprovedAppointment/>
        </>
    );
}