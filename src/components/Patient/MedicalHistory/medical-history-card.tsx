import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MedicalHistoryCard({text} : {text:string}) {
    const navigate = useNavigate();
  return (
    <Card
  onClick={() => navigate("/medical-history")}
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
        <Typography gutterBottom variant="h3" component="div">
          {text}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
}