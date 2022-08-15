import { Grid } from "@mui/material";
import ResponsiveAppBar, { headerHeight } from "./doctor-page-Appbar";


export default function DoctorLayout({ children }) {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ backgroundColor: "yellow", padding: "10px", height: "20%" }}
      spacing={2}
    >
      <Grid item>
      <ResponsiveAppBar/>
      </Grid>
      <Grid item container sx={{ top: headerHeight, position: 'absolute' }}>
        {children}
      </Grid>
    </Grid>
  );
}
