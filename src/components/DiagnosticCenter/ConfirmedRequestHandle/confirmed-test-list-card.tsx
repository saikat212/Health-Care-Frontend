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
import { ConfirmedTestDetails } from "./confirmed-test-details";

export default function ConfirmedTestListCard({ image, title, description }) {
  const navigate = useNavigate();
  return (
    <Card  onClick={()=>navigate("/selection-confirmed-test")} sx={{ width: "100%" }}>
      <CardActionArea>
        <CardContent>
         <ConfirmedTestDetails/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
