import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Speciality } from "Classes/entity-class";
import React from "react";
import { useNavigate } from "react-router-dom";

class SpecialiyCardProps{

  spec: Speciality;
}
export default function SpecialityCard({spec}:SpecialiyCardProps) {
  console.log(spec);
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate("/doctor-list", {state: spec })}
      sx={{ width: "100%" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require("../images/heaa.jpg")}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {spec.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {spec.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
