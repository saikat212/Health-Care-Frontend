import { Button, Grid, Typography } from "@mui/material";
import Basic_Structure from "./basic-navigation-bar";
import { Link, useNavigate } from "react-router-dom";


export default function PatientHomepage(){
    const navigate = useNavigate();
    return(
        <>
        <Basic_Structure />
        <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ backgroundColor: "white", padding: "10px", height: "100%" }}
            spacing={2}
        >
            <Grid item>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ backgroundColor: "white", padding: "10px", height: "100%" }}
                    spacing={2}
                >
                    <Grid item><Typography variant="h4" gutterBottom component="div">Find the best doctor of the country</Typography></Grid>
                    <Grid item>
                       
                        <Button onClick={()=>navigate("/specialities")} variant="contained">Find Doctor Now</Button>
                       
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <img
                   src={require("./images/f.jpg")}
                    height="400px" />
                   
            </Grid>
        </Grid>
        </>
    );
}