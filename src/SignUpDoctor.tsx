import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MenuItem } from "@mui/material";
import GenderRadioButton from "components/gender";
import { useNavigate } from "react-router-dom";
import { Doctor } from "Classes/patient-class";
import { API } from "API Handler/api";

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

/* const doctor_title = ["Dr.", "Prof Dr.", "Assoc Prof Dr.", "Assit Prof Dr."];
const  setTitle = React.useState('Dr.');

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setTitle(event.target.value);
}; */

export default function SignUpDoctor() {

  const navigate = useNavigate();
  const [doctor, setDoctor] = React.useState<Doctor>();
    /* const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mobileNo, setMobileNo] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [bmdcNo ,setBmdcNo] = React.useState("");
    const [nid, setNid] = React.useState("");
    const [chamber, setChamber] = React.useState(""); */

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleClickSignUp=(e)=>{
    e.preventDefault()
    console.log(doctor);
    doctor && API.doctor.addDoctor(doctor).
    then((response)=>{console.log(response)})
   };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Doctor Registration
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            
          
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(event) => {
                    setDoctor({ ...doctor, 
                    person:{...doctor?.person,firstName: event.target.value }});
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  //autoComplete="family-name"
                  onChange={(event) => {
                    setDoctor({ ...doctor,
                    person:{...doctor?.person,lastName: event.target.value }});
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => {
                    setDoctor({
                      ...doctor,
                      person: { ...doctor?.person, email: event.target.value },
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile_no"
                  label="Mobile No."
                  name="mobile_no"
                  autoComplete="mobile_no"
                  onChange={(event) => {
                    setDoctor({ ...doctor, 
                      person:{...doctor?.person, mobileNo:event.target.value} });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nid"
                  label="National ID"
                  name="nid"
                  onChange={(event) => {
                    setDoctor({...doctor,
                     nid:event.target.value});
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="bmdc_no"
                  required
                  fullWidth
                  id="bmdc_no"
                  label="BMDC No."
                  onChange={(event) => {
                    setDoctor({...doctor,
                      bmdcNo:event.target.value});
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="chamber"
                  required
                  fullWidth
                  id="chamber"
                  label="Chamber Address"
                  onChange={(event) => {
                    setDoctor({...doctor,
                      chamber:event.target.value});
                  }}
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(event) => {
                    setDoctor({...doctor,
                      person:{...doctor?.person, password:event.target.value}});
                  }}
                />
              </Grid>
              <Grid item>
                <GenderRadioButton 
                 onChange={(value)=>{
                  setDoctor({...doctor,
                    person:{...doctor?.person, gender:value}});
                }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I agree to terms and conditions."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClickSignUp}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
