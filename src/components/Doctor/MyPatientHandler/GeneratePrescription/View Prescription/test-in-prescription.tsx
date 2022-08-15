import { Grid, Typography } from "@mui/material";
import { Test_Prescription } from "Classes/entity-class";

export default function TestInPrescription({testPresArray}:{testPresArray:Test_Prescription[]}){
    return(
        <Grid 
        container
        direction="row"
        alignItems="center"
        sx={{ padding: "40px", height: "100%" }}
        spacing={3}
      >
        <Grid container spacing={2}>
          {testPresArray?.map((tip, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4} lg={3} xl={2}>
               
              <Typography>{tip?.test?.name+"    "+tip?.finding}</Typography>
          
            </Grid>
          ))}
        </Grid>
        </Grid>
    )
}