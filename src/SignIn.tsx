import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { API } from "API Handler/api";
import {  DiagnosticCenter, Doctor, Patient, Person, Taker } from "./Classes/entity-class";
import { showSnackbar } from "Classes/helper-class";
import { useSnackbar } from "notistack";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const [doc, setDoctor] = React.useState<Doctor>();
  const [pat, setPatient] = React.useState<Patient>();
  const [p, setPerson] = React.useState<Person>();
  const [t,setTaker] =  React.useState<Taker>();
  const [a,setDCAdmin] =  React.useState<DiagnosticCenter>();

  function errorVerify() {
    if (!state.email || !state.password) {
      /* enqueueSnackbar("Please fill up all field properly", {
        variant: "error",
      });  */
      return false;
    }
    return true;
  }
  function handleNotification(id : number){
    API.notification.getNotification(id).then(response => {
      console.log(response.data)
    })
  }
  function handleClickSignIn() {
    if (errorVerify()) {
      console.log("State: ",state)
      API.signInAuthentication
        .login(state.email, state.password)
        .then((response) => {
          console.log(response);
          if (response.status == 200 && response.data.success) {
            localStorage.clear()
            API.person.getPersonByMail(state.email).then((response) => {
              if (response.status == 200 && response.data) {
                setPerson(response.data);
                handleNotification(response.data.id)
                console.log(response.data);
                if (response.data.role == "patient") {
                  console.log("In patientttt")
                  setPatient({
                    ...pat,
                    person: response.data,
                    id: response.data?.id,
                  });
                
                  localStorage.setItem(
                    "Patient",
                    JSON.stringify({
                      ...pat,
                      person: response.data,
                      id:response.data?.id,
                    })
                  );
                  console.log("Test: ", response.data?.id )
                  navigate("/patient-home-page");
                } else if (response.data.role == "doctor") {
                  console.log("It's in doctor");
                  setDoctor({
                    ...doc,
                    person: response.data,
                    id: response.data?.id,
                  });
                  localStorage.setItem(
                    "Doctor",
                    JSON.stringify({
                      ...doc,
                      person: response.data,
                      id: response.data?.id,
                    })
                  );
                  navigate("/doctor-home-page");
                } else if (response.data.role == "taker") {
                  console.log("It's in taker");
                  setTaker({
                    ...t,
                    person: response.data,
                    id: response.data?.id,
                  });
                  localStorage.setItem(
                    "Taker",
                    JSON.stringify({
                      ...t,
                      person: response.data,
                      id: response.data?.id,
                    })
                  );
                  navigate("/dc-home-page");
                }
                else if (response.data.role == "admin") {
                  console.log("It's in admin");
                  setDCAdmin({
                    ...a,
                    person: response.data,
                    id: response.data?.id,
                  });
                  localStorage.setItem(
                    "Admin",
                    JSON.stringify({
                      ...a,
                      person: response.data,
                      id: response.data?.id,
                    })
                  );
                  navigate("/dc-admin-home-page");
                }
  
                else {
                  console.log("Not found : This type user is not exit.");
                }
              } else {
                console.log("condition false");
              }
            });
          } else {
            showSnackbar(enqueueSnackbar, response.data, () => {});
          }
        });
    }
  }
 
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(" + require("./images/heaa.jpg") + "'",
            //backgroundImage: require("./images/doctor.jpg"),
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="div" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => {
                  setState({ ...state, email: e.target.value });
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setState({ ...state, password: e.target.value });
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClickSignIn}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    onClick={() => navigate("/sign-up-patient")}
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/*  <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
  
}
