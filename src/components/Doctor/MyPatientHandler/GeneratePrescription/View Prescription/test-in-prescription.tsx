import { Grid, Typography } from "@mui/material";
import { Test_Prescription } from "Classes/entity-class";

export default function TestInPrescription({testPresArray}:{testPresArray:Test_Prescription[]}){
    return(
      <Grid item 
      container
      direction="column"
      //alignItems="center"
      sx={{ padding: "20px", height: "100%" }}
      spacing={1}
      justifyContent="space-between"
      color="#8b0000"
      >
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
            sx={{ padding: "10px", height: "100%" }}
            spacing={1}
            justifyContent="space-between"
            
          >
          <Grid item>  <Typography>{tip?.test?.name}</Typography> </Grid>
          <Grid item>  <Typography>{tip?.finding}</Typography> </Grid>
          </Grid>
        ))}
      </Grid>
   
    )
}