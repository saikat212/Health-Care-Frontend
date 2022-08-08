import { ButtonGroup, Button, Grid } from "@mui/material";
import DCUserPageAppbar from "../HompageConstruction/dc-user-page-appbar";
import BasicDateTimePicker from "./basic-date-time-picker";
import ComboBox from "./combo-box";
import BasicButton from "./basic-button";
import UploadButton from "./upload-button";

export default function SetConfirmedTestInfo(){
    return (
        <>
        <DCUserPageAppbar/>
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
        <UploadButton/>

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