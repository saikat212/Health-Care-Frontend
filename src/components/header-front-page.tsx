import {AppBar, Grid, Typography, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import SearchBar from "./search-bar";
import * as React from 'react';



export default function Header_Front_Page() {
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
                                src={require("../images/heaa.jpg")}
                                height="40px"

                            />
                        </Grid>
                        <Grid item>
                            <Typography color={"bisque"} fontSize={"6"}>Health Care</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="row" justifyContent="space-between" spacing={2}>
                        <Grid item>
                            <Button>For Doctors</Button>
                        </Grid>
                        <Grid item>
                            <Button>About Us</Button>
                        </Grid>
                        <Grid item>
                            <Button>FAQs</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => navigate("/sign-in")} variant="contained">Log In</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
    )
}