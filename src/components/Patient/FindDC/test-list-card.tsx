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
  import { TestDetails } from "./test-details";
  
  export default function TestListCard({dc_test_list_info}:{dc_test_list_info:DCTestList}) {
    const navigate = useNavigate();
    return (
    <Card  
      onClick={()=>navigate("/selection-confirmed-test",{state:dc_test_list_info})} sx={{ width: "100%"}}
      >
        <CardActionArea>
          <CardContent>
           <TestDetails
            dc_test_list_info = {dc_test_list_info}
           />
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  