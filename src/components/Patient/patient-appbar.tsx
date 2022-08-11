import {
  AppBar,
  Grid,
  Typography,
  Button,
  Badge,
  IconButton,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import ShowNotification from "components/notification";
// import SearchBar from "./search-bar";
export const headerHeight = 105;

export default function PatientAppbar() {
   function handleLogOut(){
    localStorage.clear()
         navigate("/")
  }
  const navigate = useNavigate();
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "indigo" }}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ backgroundColor: "white", padding: "10px", height: headerHeight }}
        spacing={2}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <img src={require("../../images/heaa.jpg")} height="40px" />
            </Grid>
            <Grid item>
              <Typography color={"red"} fontSize={"6"}>
                Health Care
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item>
              <Button>Profile</Button>
            </Grid>
            <Grid item>
              <ShowNotification num = {3} />
            </Grid>
            <Grid item>
              <Button onClick={
               handleLogOut
                } variant="contained">
                Log Out
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
