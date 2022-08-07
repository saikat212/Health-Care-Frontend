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
  import { PrescriptionDetails } from "./prescription-details";
  
  export default function PrescriptionListCard({ image, title, description }) {
    const navigate = useNavigate();
    return (
      <Card  onClick={()=>navigate("/selection-prescription")} sx={{ width: "100%" }}>
        <CardActionArea>
          <CardContent>
           <PrescriptionDetails/>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  