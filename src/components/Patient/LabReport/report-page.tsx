import { Button, Grid, Typography } from "@mui/material";
import Header from "components/header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DCAdminPageAppbar from "components/DiagnosticCenter/HompageConstruction/admin-page-appbar";
import { DCTestList, DC_Test, DiagnosticCenter, Patient } from "Classes/entity-class";
import { useEffect } from "react";
import React from "react";
import { API } from "API Handler/api";


import PatientLayout from "../patient-layout";

import LabReportCard from "./lab-report-card";
export default function ReportPage() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [dc_test_info, setDCTestInfo] = React.useState<DC_Test>(state as DC_Test);

    const id = (JSON.parse(localStorage.getItem("Patient") || "") as Patient).id || undefined;
    console.log("patient id ")
    console.log(id)

    useEffect(() => {
        setDCTestInfo(state as DC_Test);
    }, []);

    function handleBack ()
    {
        navigate("/lab-report-list-ui")
    }

    return (
        <>
            <PatientLayout children={undefined} />

            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                sx={{ backgroundColor: "yellow", padding: "10px", height: "2000%" }}
                spacing={2}
            >
                <Grid item >

                    <Typography sx={{ fontWeight: "bold" }} > Report </Typography>
                    <img src={dc_test_info.report} height="500px" />
                    
                    <object data={dc_test_info.report} type="application/pdf" width="1000" height="1000" >
                        
                    </object>

                </Grid>

                <Grid item >

                <Button onClick={() => navigate("/lab-report-list-ui")} variant="contained" component="label">
                      BACK
                    </Button>
                </Grid>
            </Grid>

        </>

    );
}
