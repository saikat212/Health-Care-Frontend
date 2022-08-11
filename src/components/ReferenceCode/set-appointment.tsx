import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SetAppointmentDetails from "./set-appointment-details";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import PatientAppbar from "components/Patient/patient-appbar";
import { useLocation } from "react-router-dom";
import { Appointment } from "Classes/entity-class";
import { valueToPercent } from "@mui/base";
import { API } from "API Handler/api";
import PatientLayout from "components/Patient/patient-layout";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//const steps = ['Patient info', 'Payment details', 'Review appointment details'];
const steps = ["Patient info", "Payment details"];

const theme = createTheme();

export default function SetAppointment() {
  const { state } = useLocation();
  const [_appointment, setAppointment] = React.useState<Appointment>(
    new Appointment()
  );
  useEffect(() => {
    //Data will be loaded first time only
    state && setAppointment(state as Appointment);
  }, [state]);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      console.log("appoint check");
      console.log(_appointment);
      API.appointment.saveAppointment(_appointment).then((response) => {
        console.log("Response: ", response.data);
        setAppointment({
          ..._appointment,
          id: response.data.id,
        });
      });
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <SetAppointmentDetails
            appointment={_appointment}
            onChange={(value) => {
              setAppointment(value);
            }}
          />
        );
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <PatientLayout>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Provide Appointment Details
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your appointment.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your appointment number is {_appointment.id}.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? "Confirm" : "Next"}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          {/*   <Copyright /> */}
        </Container>
      </ThemeProvider>
    </PatientLayout>
  );
}
