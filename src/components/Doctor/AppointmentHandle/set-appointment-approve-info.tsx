import { ButtonGroup, Button, Grid } from "@mui/material";
import ResponsiveAppBar from "../doctor-page-Appbar";
import BasicDateTimePicker from "./basic-date-time-picker";
import ComboBox from "./combo-box";
import BasicButton from "./basic-button";
export function SetAppointmentApproveInfo(){
    return (
        <>
        <ResponsiveAppBar/>
    
        <Grid
        container
        direction="column"
        alignItems="center"
        >
        <BasicDateTimePicker/>
        </Grid>

        <Grid
        container
        direction="column"
        alignItems="center"
        >
        <ComboBox/>
        </Grid>

        
        <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "60px", height: "100%" }}
        spacing={2}
        >
        <BasicButton/>
        </Grid>

       
        </>
    );
}