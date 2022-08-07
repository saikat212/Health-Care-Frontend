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
import { useNavigate } from "react-router-dom";
import { Doctor } from "Classes/entity-class";

export default function DoctorDetailsCard({ doctor } :{doctor:Doctor}) {
  const navigate = useNavigate();
  return (
    <Card  onClick={()=>navigate("/doctor-info",{state:doctor})} sx={{ width: "100%" }}>
      <CardActionArea>
        <CardContent>
         <DoctorDetails 
         doctor={doctor}
         />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
