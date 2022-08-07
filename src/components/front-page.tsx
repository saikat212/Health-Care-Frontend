import { Button, Grid, Typography } from "@mui/material";
import Header_Front_Page from "./header-front-page";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import BasicCard from "./card";



export default function Front_Page(){
    const navigate = useNavigate();
    return(
        <>
        <Header_Front_Page />
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
                    src={require("../images/f.jpg")}
                    height="400px" />
            </Grid>
        </Grid></>
    );
}