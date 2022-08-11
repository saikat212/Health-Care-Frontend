import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { fontWeight } from "@mui/system";
import { DC_Test } from "Classes/entity-class";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TestDetails } from "./test-details";

export default function TestListCard({dc_test_info}:{dc_test_info:DC_Test}) {
  const navigate = useNavigate();
  return (
    <Card >
       {/* onClick={()=>navigate("/selection-test")} sx={{ width: "100%" }} */}
      <CardActionArea>
        <CardContent>
         <TestDetails
         dc_test_info = {dc_test_info}
         />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
