import { Grid, Typography } from "@mui/material";
import { Patient } from "Classes/entity-class";
import { getAge } from "components/age-calculatior";

export default function PatientInPrescription({patient}:{patient:Patient}){
    return(
        <Grid 
        container
        direction="row"
        alignItems="center"
        sx={{ padding: "40px", height: "100%" }}
        spacing={3}
      >
        <Grid item>
            <Typography>Patient Name: + {patient?.person?.firstName}+" "+{patient?.person?.lastName}</Typography>
        </Grid>
        <Grid item>
            <Typography>Age: {getAge(patient?.person?.dateOfBirth?.toString())} years old</Typography>
        </Grid>
        <Grid item>
            <Typography>Gender: {patient?.person?.gender}</Typography>
        </Grid>
        </Grid>
    )
}