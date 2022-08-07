import { Grid, Typography, Rating, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function ContentSelectedPrescription() {
  const navigate = useNavigate();
  return (
    <>
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: "80px", height: "100%" }}
      spacing={2}
    >
      {/* Picture */}
     
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
              
              </Typography>
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
              <Typography sx={{ fontWeight: "bold" }}>Here Set Prescription Details Page</Typography>
            </Grid>
            <Grid item>
              <Typography>Injury and Violence</Typography>
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
              <Typography sx={{ fontWeight: "bold" }}>Treatment Timeline</Typography>
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
                    Date
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>10/12/2021</Typography>
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
                  <Typography sx={{ fontWeight: "bold" }}>
                    Time
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>12:30 PM</Typography>
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
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: "10px", height: "100%" }}
            spacing={2}
          >
            <Grid item>
              <Typography sx={{ fontWeight: "bold" }}>Chamber Address</Typography>
            </Grid>
            <Grid item>
              <Typography>#20,Popular medical hospital</Typography>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Grid>

<Grid
container
direction="row"
alignItems="center"
justifyContent="space-between"
sx={{ padding: "80px", height: "100%" }}
spacing={2}
>

{/*    //3rd column */}
<Grid item>
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
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "10px", height: "100%" }}
        spacing={2}
      >
        <Grid item>
          <Typography></Typography>
        </Grid>
        <Grid item>
          <Typography></Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Button onClick={()=>navigate("/set-see-patient-info")} variant="contained" color="success">
      View Previous Prescription
      </Button>
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
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "10px", height: "100%" }}
        spacing={2}
      >
        <Grid item>
          <Typography></Typography>
        </Grid>
        <Grid item>
          <Typography></Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Button onClick={()=>navigate("/set-see-patient-info")} variant="contained" color="success">
      Generate Prescription
      </Button>
    </Grid>
  </Grid>
</Grid>
</Grid>
</>


  );
}
