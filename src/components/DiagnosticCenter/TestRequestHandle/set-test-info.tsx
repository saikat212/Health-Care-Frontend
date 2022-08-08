import { ButtonGroup, Button, Grid } from "@mui/material";
import DCUserPageAppbar from "../HompageConstruction/dc-user-page-appbar";
import BasicDateTimePicker from "./basic-date-time-picker";
import ComboBox from "./combo-box";
import BasicButton from "./basic-button";

export default function SetTestInfo(){
    return (
        <>
        <DCUserPageAppbar/>
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