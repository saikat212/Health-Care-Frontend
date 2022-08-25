import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Grid, Typography, Rating, Stack, Button, IconButton } from "@mui/material";
import { API } from "API Handler/api";
import { DC_Test, Taker } from "Classes/entity-class";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export  function UploadPage() {
   const navigate = useNavigate();
   const [file,setFile] = useState<File>();
   const [url_file,setURL] = useState("");

   const handleComplete = (e) => {
    e.preventDefault();
    // dc_test_info.report = "report.pdf"
    // dc_test_info.status = "reported"
    // API.diagnosticCenter.addDCTest(dc_test_info).then((response) => {
    //   console.log(response);
    //   console.log("yes.");
    //   navigate("/submitted-test-list-ui")
    // });
   };
   
   const handleFile = (e) => {
    setFile(e.target.files[0]);
    let url = URL.createObjectURL(e.target.files[0]);
    setURL(url);
    console.log("url: ")
    console.log(url)
    console.log("which file is uploaded: ")
    console.log(e.target.files[0].name);
    console.log(e.target.files);
   };

   const handleUpload = (e) => {
    e.preventDefault();
    console.log("upload that file: ")
    console.log(file);
    console.log(url_file)
   };
   
  
  return(
      <>
          <Stack direction="column" alignItems="center" spacing={2}>

              <input onChange={handleFile} type="file" />
              <Button onClick={handleUpload} variant="contained" component="label">
                  Upload
              </Button>
              {/* <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton> */}
          </Stack>

          <Grid item>
              <img src={url_file} height="500px" />
              <object data={url_file} type="application/pdf" width="50%" height="50%" >
                  {/* <p>Alternative text - include a link <a href={url_file} >to the PDF!</a></p> */}
              </object>
          </Grid>

          

      </>
    
    );
}
