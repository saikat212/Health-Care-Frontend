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
import { DC_Test, DiagnosticCenter } from "Classes/entity-class";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DCDetails } from "./dc-details";

export default function DCListCard({dc_info}:{dc_info:DiagnosticCenter}) {
  const navigate = useNavigate();
  return (
    <Card  
    onClick={()=>navigate("/test-list-ui",{state:dc_info})} sx={{ width: "100%"}}
    >
      <CardActionArea>
        <CardContent>
         <DCDetails
          dc_info = {dc_info}
         />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
