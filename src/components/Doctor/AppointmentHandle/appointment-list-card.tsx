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
import { AppointmentDetails } from "./appointment-details";

export default function AppointmentListCard({appointment}:{appointment:Appointment}) {
  const navigate = useNavigate();
  return (
    <Card  onClick={()=>navigate("/set-appointment-info",{state:appointment})} sx={{ width: "100%" }}>
      <CardActionArea>
        <CardContent>
         <AppointmentDetails
          appointment= {appointment}
         />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
