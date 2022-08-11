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
import { Appointment } from "Classes/entity-class";
import React from "react";
import { useNavigate } from "react-router-dom";
import  ApprovedAppointmentDetails from "./approved-appointment-details";

export default function ApprovedAppointmentListCard({appointment}:{appointment:Appointment}) {
  const navigate = useNavigate();
  return (
    <Card  onClick={()=>navigate("/selection-approved-appointment",{state:appointment})} sx={{ width: "100%" }}>
      <CardActionArea>
        <CardContent>
         <ApprovedAppointmentDetails 
          appointment= {appointment}/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
