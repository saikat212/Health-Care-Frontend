import { ButtonGroup, Button, Grid } from "@mui/material";

import ResponsiveAppBar from "components/Doctor/doctor-page-Appbar";
import ChooseMedicine from "./choose-medicine";
import ChooseDose from "./choose-dose";
import ChooseDCTest from "./choose-dc-test";
import { useNavigate } from "react-router-dom";

export default function SetPrescriptionInfo(){
    const navigate = useNavigate();
    return (
        <>
        <ResponsiveAppBar/>

    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: "100px", height: "100%" }}
      spacing={2}
    >
         <ChooseMedicine/>

         <Grid
      container
      direction="column"
      alignItems="center"
     
    >
         <ChooseDose/>
        

    </Grid>  

    </Grid>  

    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: "100px", height: "100%" }}
      spacing={2}
    >
         <ChooseDCTest/>

         
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: "40px", height: "100%" }}
      spacing={2}
    >
    <Grid item>
        <Button onClick={()=>navigate("/prescription-page")} variant="contained" color="success">
          Generate
        </Button>
      </Grid>

    </Grid>   

    </Grid>     


        </>
    );
}