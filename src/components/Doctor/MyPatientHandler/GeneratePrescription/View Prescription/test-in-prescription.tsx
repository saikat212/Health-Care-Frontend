import { Grid, Typography } from "@mui/material";
import { Test_Prescription } from "Classes/entity-class";

export default function TestInPrescription({testPresArray}:{testPresArray:Test_Prescription[]}){
    return(
      <Grid item 
      container
      direction="column"
      //alignItems="center"
      sx={{ padding: "40px", height: "100%" }}
      spacing={3}
      justifyContent="space-between">
        <Grid item>
          <Typography>Test:</Typography>
        </Grid>
        {testPresArray?.map((tip, idx) => (
          <Grid
            key={idx}
            item
            container
            direction="row"
            alignItems="center"
            sx={{ padding: "40px", height: "100%" }}
            spacing={3}
            justifyContent="space-between"
          >
          <Grid item>  <Typography>{tip?.test?.name}</Typography> </Grid>
          <Grid item>  <Typography>{tip?.finding}</Typography> </Grid>
          </Grid>
        ))}
      </Grid>
   
    )
}