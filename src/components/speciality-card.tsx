import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function SpecialityCard({image, title, description}) {
    const navigate = useNavigate();
    return (
        <Card onClick={() => navigate("/doctor-list")} sx={{width: "100%"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
