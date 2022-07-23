import {
  AppBar,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Header from "./components/header";
import SearchBar from "./components/search-bar";
import SpecialityCard from "./components/speciality-card";
import { Link, useNavigate } from "react-router-dom";
/* function LoopLoop(){
    let jsx = "";
    let i;
    for(i=0; i<100; i++){
        jsx += 
    }


} */
export function SpecialitiesUI() {
 
  return (
    <Grid container spacing={2} sx={{ backgroundColor: "gray" }}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          {Array.from(Array(10).keys()).map((i, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4} lg={3} xl={2}>
               
              <SpecialityCard 
               
                title="Medicine"
                description="Cold, flu, fever, vomiting, infections, headaches or any other general health issues."
                image={require("./images/heaa.jpg")}
              />
          
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* {<ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button size="large">Medicine/General Physician</Button>
      <Button >Two</Button>
      <Button>Three</Button>
    </ButtonGroup>} */}
    </Grid>
  );
}
