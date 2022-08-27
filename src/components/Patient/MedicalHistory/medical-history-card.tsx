import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { Doctor } from "Classes/entity-class";
import { GeneratePrescription } from "Classes/helper-class";
import { getDate } from "date-fns";
import { useNavigate } from "react-router-dom";


function get_Date(strDate:string) {
  var date = new Date(strDate);
  var day = date.getDate();
  var month = date.getMonth()+1;
  var year = date.getFullYear();

  var str = day + "-" + month + "-" + year;
  return str;
}
export default function MedicalHistoryCard({problem,date,doctor,gp} : {problem:string,date:Date,doctor:Doctor,gp:GeneratePrescription}) {
    const navigate = useNavigate();
  return (
    <Card
    onClick={() =>  navigate("/prescription-page-patient-side", { state: gp })}
    sx={{ width: "300%", height : "100%" }} 
  >
    <CardActionArea>
      
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
            {problem}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {doctor.person?.firstName + " "+ doctor.person?.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {get_Date(date.toString())}
          </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
}