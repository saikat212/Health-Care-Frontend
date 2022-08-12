import { Grid } from "@mui/material";
import PatientAppbar, { headerHeight } from "./patient-appbar";

export default function PatientLayout({ children }) {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ backgroundColor: "white", padding: "10px", height: "100%" }}
      spacing={2}
    >
      <Grid item>
        <PatientAppbar />
      </Grid>
      <Grid item container sx={{ top: headerHeight, position: "absolute" }}>
        {children}
      </Grid>
    </Grid>
  );
}
