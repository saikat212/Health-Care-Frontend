import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import Header from "components/header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DCAdminPageAppbar from "components/DiagnosticCenter/HompageConstruction/admin-page-appbar";
import { DCTestList, DC_Test, DiagnosticCenter, Test } from "Classes/entity-class";
import { useEffect, useState } from "react";
import React from "react";
import { API } from "API Handler/api";
import DCListCard from "./dc-list-card";



import PatientLayout  from "../patient-layout";
import FindDCPageLayout from "./FindDCPageLayout";

export default function DCSearchPage() {
    const navigate = useNavigate();
    const [testname, setTestName] = useState("");
    const [dctestlist,setDCTestList] = useState<DCTestList[]>();
    const [choiceList,setChoiceList] = useState<Test[]>();
   
   useEffect ( () => {
    API.test.getAllTest().then((response) =>{
     if(response.data == null)
     {
      console.log("No item here .")
     }
      setChoiceList(response.data)
      console.log(response)
      
    });
  
    },[]);

      
    // const handleTestList = (event) => {
    //     // setDcAdmin({ ...dcAdmin, isOfferOnsiteTest : event.target.value});
    //     SetTest(event.target.value);
    //     console.log("ki value asa")
    //     console.log(event.target.value);
    //   };
   
     const handleSearch = (event) => {
       event.preventDefault();
     
       setTestName(event.target.value);
       console.log("handle search a ki ase asce value:")
       console.log(event.target.value);
       console.log("testname value: aiche")
       console.log(testname);
 
      testname && 
       API.dcTestList.getDCByTestName(testname as string).then((response) => {
       setDCTestList(response.data);
       console.log("dctestlist : paichi db theke: ")
       console.log(response.data)
       console.log("dctestlist : send korsi: ")
       console.log(dctestlist);
       navigate("/dc-list-by-testname",{state: response.data})
       });
 
     }
 function handleDCBasedSearch(){
             navigate("/all-dc-list-ui")
      }
  return (
    <>
          <FindDCPageLayout />


      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ backgroundColor: "white", padding: "120px" }}
        spacing={2}
      >


        <Grid item >
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Test
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //@ts-ignore
              // value={dcAdmin?.isOfferOnsiteTest || null}
              value={testname}
              label="Test"
              onChange={handleSearch}
            >
              {choiceList?.map((option, idx) => (
                <MenuItem key={idx} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>


        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ backgroundColor: "white", padding: "20px" }}
          spacing={2}
        >
          <Grid >
            {/* onSubmit={handleSearch} */}

            <form onSubmit={handleSearch} >
              <label>
                <input
                  type="text"
                  placeholder="Type test name"
                  value={testname}
                  onChange={(e) => setTestName(e.target.value)}
                />
              </label>
              <input type="submit" />
            </form>

          </Grid>



        </Grid>

        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ backgroundColor: "white", padding: "20px" }}
          spacing={2}
        >
          <Grid>

            <Grid item>
              <Button onClick={handleDCBasedSearch} variant="contained">
                Best DC Based Search
              </Button>
            </Grid>




          </Grid>

        </Grid>





      </Grid>


      </>

  );
}
