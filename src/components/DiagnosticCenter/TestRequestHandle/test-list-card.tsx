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
import { TestDetails } from "./test-details";

export default function TestListCard({ image, title, description }) {
  const navigate = useNavigate();
  return (
    <Card  onClick={()=>navigate("/selection-test")} sx={{ width: "100%" }}>
      <CardActionArea>
        <CardContent>
         <TestDetails/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
