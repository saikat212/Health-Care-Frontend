import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    Box,
  } from "@mui/material";
  import { fontWeight } from "@mui/system";
  import { DCTestList, DC_Test, DiagnosticCenter } from "Classes/entity-class";
  import React from "react";
  import { useNavigate } from "react-router-dom";
  import { LabReportDetails } from "./lab-report-details";
  
  export default function LabReportCard({dc_test_info}:{dc_test_info:DC_Test}) {
    const navigate = useNavigate();

    return (
    <Card  
      onClick={()=>navigate("/report-page",{state:dc_test_info})} sx={{ width: "100%"}}
      >
        <CardActionArea>
          <CardContent>
           <LabReportDetails
            dc_test_info = {dc_test_info}
           />
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  