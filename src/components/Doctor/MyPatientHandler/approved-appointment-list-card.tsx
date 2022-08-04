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
import { ApprovedAppointmentDetails } from "./approved-appointment-details";

export default function ApprovedAppointmentListCard({ image, title, description }) {
  const navigate = useNavigate();
  return (
    <Card  onClick={()=>navigate("/selection-approved-appointment")} sx={{ width: "100%" }}>
      <CardActionArea>
        <CardContent>
         <ApprovedAppointmentDetails/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
