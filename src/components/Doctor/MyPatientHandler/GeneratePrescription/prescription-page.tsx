import { Grid, Typography, Rating, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "components/Doctor/doctor-page-Appbar";
import DCTestList from "./dc-test-list";
import MedicineList from "./medicine-list";
export default function PrescriptionPage() {
  const navigate = useNavigate();
  return (

    <>

    <ResponsiveAppBar/>
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: "80px", height: "100%" }}
      spacing={2}
    >
    
      {/* //1st Column */}
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: "10px", height: "100%" }}
          spacing={2}
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: "10px", height: "100%" }}
            spacing={2}
          >
            <Grid item>
              <Typography sx={{ fontWeight: "bold" }}>
                Patient: Saikat Ghatak
              </Typography>

              <Typography>Age : 30 </Typography>
              <Typography>Main Symtom: Injury</Typography>
            </Grid>
            <Grid item>
              <Typography></Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: "10px", height: "100%" }}
            spacing={2}
          >
            <Grid item>
              <Typography sx={{ fontWeight: "bold" }}></Typography>
            </Grid>
            <Grid item>
              <Typography></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*  //2nd Column */}
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: "10px", height: "100%" }}
          spacing={2}
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: "10px", height: "100%" }}
            spacing={2}
          >
            <Grid item>
              <Typography sx={{ fontWeight: "bold" }}>Doctor: Dr.Kamrul Hasan</Typography>
              <Typography >Degree: MBBS,FCPS</Typography>
            </Grid>
            <Grid item>
              <Typography></Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: "10px", height: "100%" }}
            spacing={2}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: "10px", height: "100%" }}
                spacing={2}
              >
                <Grid item>
                  <Typography sx={{ fontWeight: "bold" }}>
            
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography></Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: "10px", height: "100%" }}
                spacing={2}
              >
                <Grid item>
                  <Typography sx={{ fontWeight: "bold" }}></Typography>
                </Grid>
                <Grid item>
                  {/* <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                  </Stack> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*    //3rd column */}
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: "10px", height: "100%" }}
          spacing={2}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="space-between"
              sx={{ padding: "10px", height: "100%" }}
              spacing={2}
            >
              {/* <Grid item>
                <Typography>Fee:</Typography>
              </Grid>
              <Grid item>
                <Typography>500</Typography>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item>
            {/* <Button onClick={()=>navigate("/set-appointment-info")} variant="contained" color="success">
              Approve Appointment
            </Button> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: "10px", height: "100%" }}
      spacing={2}
    >  
    
        
           <MedicineList/>


     

    </Grid>

    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: "80px", height: "100%" }}
      spacing={2}
    >
  
    <DCTestList/>

    </Grid>
    <Grid item
     container
     direction="row"
     alignItems="center"
     justifyContent="space-between"
     sx={{ padding: "10px", height: "100%" }}
     spacing={2}
    
    >
      <Button onClick={()=>navigate("/")} variant="contained" color="success">
      Search DC Center
      </Button>
    </Grid>

    <Grid item
     container
     direction="row"
     alignItems="center"
     justifyContent="space-between"
     sx={{ padding: "10px", height: "100%" }}
     spacing={2}
    >
      <Button onClick={()=>navigate("/")} variant="contained" color="success">
      Download Prescription
      </Button>
    </Grid>


 

    </>
  );
}
