import React, { useEffect } from "react";
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
import GenderRadioButton from "components/gender";
import { useNavigate } from "react-router-dom";
import { Doctor, Taker, TakerSpeciality } from "Classes/entity-class";
import { API } from "API Handler/api";
import { DatePicker } from "@mui/x-date-pickers";
import { Speciality } from "Classes/entity-class";
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

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

/* const doctor_title = ["Dr.", "Prof Dr.", "Assoc Prof Dr.", "Assit Prof Dr."];
const  setTitle = React.useState('Dr.');

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setTitle(event.target.value);
}; */

export default function SignUpTaker() {
  const theme = createTheme();
  const navigate = useNavigate();

  const [taker,setTaker] = React.useState<Taker>();
  const [takerspecialities,setTakerSpeciality] = useState<TakerSpeciality[]>([]);


  useEffect(() => {
    API.takerSpeciality.getTakerSpeciality().then((response) => {
      setTakerSpeciality(response.data);
      console.log(response.data);

    });

  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  }

  const handleSpeciality = (event) => {
   
    setTaker({ ...taker, takerSpeciality: takerspecialities.find(( item ) => item.id == event.target.value),});
    console.log(event.target.value);
  };

  const handleClickSignUp = (e) => {
    e.preventDefault();

      taker && 
        API.taker.addTaker( 
          { 
            ...taker,
             person: 
             {
               ...taker?.person , role: "taker"
             }
          }).then( (response) => { 

            console.log(response);
            navigate("/dc-home-page")
           });
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
            DCSampleTaker Registration
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
                  autoComplete="name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(event) => {
              

                    setTaker({...taker,person: {...taker?.person,firstName: event.target.value,}, });
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
                  autoComplete="name"
                  onChange={(event) => {
                 
                    setTaker({...taker,person: {...taker?.person,lastName: event.target.value,}, });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <DatePicker
                  label="Date of birth"
                  value={taker?.person?.dateOfBirth}
                  onChange={(newValue) => {


                    setTaker({ ...taker , person: { ...taker?.person, dateOfBirth: newValue },});
                  }}
                  renderInput={(params) => (
                    <TextField required fullWidth {...params} />
                  )}
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
            

                    setTaker({ ...taker, person: { ...taker?.person, email: event.target.value }, });
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
               

                    setTaker({ ...taker, person: {...taker?.person, mobileNo: event.target.value,}, });

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
                  
                    setTaker({ ...taker, nid: event.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="pathology_resgistration_no"
                  required
                  fullWidth
                  id="pathology_resgistration_no"
                  label="pathology_resgistration_no"
                  onChange={(event) => {
                    
                    setTaker({ ...taker, pathology_registration_no: event.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select your speciality
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //@ts-ignore
                    value={taker?.takerSpeciality?.id || null}
                    label="Select your speciality"
                    onChange={handleSpeciality}
                  >
                    {takerspecialities?.map((takerSpeciality, idx) => (
                      <MenuItem key={idx} value={takerSpeciality.id}>
                        {takerSpeciality.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
              

                    setTaker ({ ...taker, person: { ...taker?.person, password: event.target.value,}, });
                  }}
                />
              </Grid>
              <Grid item>
                <GenderRadioButton
                  onChange={(value) => {
            

                  setTaker ({ ...taker, person: { ...taker?.person, gender: value }, });

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
