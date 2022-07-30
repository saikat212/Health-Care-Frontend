import {AppBar, Grid, Typography, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
// import SearchBar from "./search-bar";
import * as React from 'react';

export default function Basic_Structure() {
    const navigate = useNavigate();
    return (
        <AppBar position="fixed" sx={{backgroundColor: "indigo"}}>
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{backgroundColor: "white", padding: "10px", height: "100%"}}
                spacing={2}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <img
                                // src={require("../images/heaa.jpg")}
                                height="40px"

                            />
                        </Grid>
                        <Grid item>
                            <Typography color={"red"} fontSize={"6"}>Health Care</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="row" justifyContent="space-between" spacing={2}>
                        <Grid item>
                            <Button>Profile</Button>
                        </Grid>
                        <Grid item>
                            <Button>Notification</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => navigate("/")} variant="contained">Log Out</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
    )
}