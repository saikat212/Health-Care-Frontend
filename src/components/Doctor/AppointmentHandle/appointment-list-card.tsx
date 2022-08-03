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
import React from "react";
import { useNavigate } from "react-router-dom";
import { AppointmentDetails } from "./appointment-details";

export default function AppointmentListCard({ image, title, description }) {
  const navigate = useNavigate();
  return (
    <Card  onClick={()=>navigate("/selection-appointment")} sx={{ width: "100%" }}>
      <CardActionArea>
        <CardContent>
         <AppointmentDetails/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
