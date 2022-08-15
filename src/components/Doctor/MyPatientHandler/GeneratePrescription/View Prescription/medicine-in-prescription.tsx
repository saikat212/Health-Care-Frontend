import { Grid, Typography } from "@mui/material";
import { MC_Prescription } from "Classes/entity-class";

export default function MedicineInPrescription({mcPresArray}:{mcPresArray:MC_Prescription[]}){
    return(
        <Grid 
        container
        direction="row"
        alignItems="center"
        sx={{ padding: "40px", height: "100%" }}
        spacing={3}
      >
        <Grid container spacing={2}>
          {mcPresArray?.map((mip, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4} lg={3} xl={2}>
               
              <Typography>{mip?.medicine?.name +"   "+mip?.dose+"   "+mip?.duration}</Typography>
          
            </Grid>
          ))}
        </Grid>
        </Grid>
    )
}