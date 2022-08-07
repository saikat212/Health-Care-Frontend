import { ButtonGroup, Button } from "@mui/material";

import { ContentSelectedPrescription } from "./content-selected-prescription";
import ResponsiveAppBar from "components/Doctor/doctor-page-Appbar";
export function SelectionPrescription(){
    return (
        <>
        <ResponsiveAppBar/>
        <ContentSelectedPrescription/>
        </>
    );
}