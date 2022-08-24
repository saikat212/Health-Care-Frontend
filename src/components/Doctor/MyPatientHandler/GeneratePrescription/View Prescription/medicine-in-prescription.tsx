import { Grid, Typography } from "@mui/material";
import { MC_Prescription } from "Classes/entity-class";

export default function MedicineInPrescription({
  mcPresArray,
}: {
  mcPresArray: MC_Prescription[];
}) {
  return (
   
      <Grid
      container
      direction="column"
      //alignItems="center"
      sx={{ padding: "40px", height: "100%" }}
      spacing={3}
      justifyContent="space-between"
      color="blue"
      >
        <Grid item>
          <Typography>Medicine:</Typography>
        </Grid>
        {mcPresArray?.map((mip, idx) => (
          <Grid
            key={idx}
            //item
            container
            direction="row"
            alignItems="center"
            sx={{ padding: "40px", height: "100%" }}
            spacing={3}
            justifyContent="space-between"
          
          >
           <Grid item> <Typography>{mip?.medicine?.name}</Typography> </Grid>
           <Grid item> <Typography>{mip?.dose}</Typography> </Grid>
           <Grid item> <Typography>{mip?.duration}</Typography> </Grid>
          </Grid>
        ))}
      </Grid>
   
  );
}
