import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    Box,
} from "@mui/material";
import {fontWeight} from "@mui/system";
import React from "react";
import {DoctorDetails} from "./doctor-details";
import {useNavigate} from "react-router-dom";

export default function DoctorDetailsCard({image, title, description}) {
    const navigate = useNavigate();
    return (
        <Card onClick={() => navigate("/doctor-info")} sx={{width: "100%"}}>
            <CardActionArea>
                <CardContent>
                    <DoctorDetails/>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
