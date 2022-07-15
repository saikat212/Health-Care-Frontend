import { AppBar, Grid, Typography, Button } from "@mui/material";
import SearchBar from "./search-bar";


export default function Header(){
return(
<AppBar position="fixed" sx={{ backgroundColor: "indigo" }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ backgroundColor: "white", padding: "10px", height: "100%" }}
          spacing={2}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <img
                  src={require("../images/heaa.jpg")}
                  height="40px"

                />
              </Grid>
              <Grid item>
                <Typography color={"bisque"} fontSize={"6"}>Health Care</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
          <Grid container direction="row"  justifyContent="space-between" spacing={2}>
            <Grid item>
            <SearchBar />
            </Grid>
            <Grid item>
              <Button variant="contained">Log In</Button>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
      </AppBar> 
)
}