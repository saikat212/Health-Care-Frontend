import { Grid } from "@mui/material";
import Basic_Structure, { headerHeight } from "./basic-navigation-bar";

export default function PatientLayout({ children }) {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ backgroundColor: "yellow", padding: "10px", height: "100%" }}
      spacing={2}
    >
      <Grid item>
        <Basic_Structure />
      </Grid>
      <Grid item container sx={{ top: headerHeight, position: 'absolute' }}>
        {children}
      </Grid>
    </Grid>
  );
}
