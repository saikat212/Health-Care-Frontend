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
import { DoctorDetails } from "components/Doctor/doctor-details";

export default function DoctorDetailsCard({ image, title, description }) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea>
        <CardContent>
         <DoctorDetails/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
