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
  import { DCDetails } from "./dc-details";
import { DCDetails1 } from "./dc-details1";
  
  export default function DCListCard1({dc_test_list_info}:{dc_test_list_info:DCTestList}) {
    const navigate = useNavigate();
    return (
      <Card  
    //   onClick={()=>navigate("/test-list-ui",{state:dc_test_list_info})} sx={{ width: "100%"}}
    onClick={()=>navigate("/previous-page-set-info",{state:dc_test_list_info})} sx={{ width: "100%"}}
      >
        <CardActionArea>
          <CardContent>
           <DCDetails1
            dc_test_list_info = {dc_test_list_info}
           />
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  