import { Grid, Typography } from "@mui/material";
import { Doctor } from "Classes/entity-class";
import { getAge } from "components/age-calculatior";

export default function DoctorInPrescription({doctor}:{doctor:Doctor}){
    return(
        <Grid 
        container
        direction="column"
        alignItems="center"
        sx={{ padding: "40px", height: "100%" }}
        spacing={3}
      >
        <Grid item>
            <Typography>{`Doctor Name: ${doctor?.person?.firstName} ${doctor?.person?.lastName}` }</Typography>
        </Grid>
        <Grid item>
            <Typography>{doctor?.degree} </Typography>
        </Grid>
        <Grid item>
            <Typography>Experience : {doctor?.experience} years</Typography>
        </Grid>
        </Grid>
    )
}