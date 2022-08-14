import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { API } from 'API Handler/api';
import { Test } from 'Classes/entity-class';


export default function ChooseDCTest({
  onChange,
}: {
  onChange: (value) => void;
}) {
  const [test, setTest] = React.useState<Test| null>();
  const [inputTest, setInputTest] = React.useState<Test>();
  const [tests, setTests] = React.useState<Test[]>();

   React.useEffect(()=>{
    API.test.getAllTest().then(response=>{
      setTests(response.data)
      console.log("Test: ",response.data)
    })
  },[]) 
  return (
    <Autocomplete
    id="test"
    options={tests as Test[]}
    clearOnBlur={false}
    getOptionLabel={(option)=>option.name as string}
    onChange={(event: any, newValue:Test| null) => {
      setTest(newValue);
      onChange(newValue)
    }}
    inputValue={inputTest?.name}
    onInputChange={(event, newInputValue) => {
      setInputTest({
        ...inputTest,
        id:0,   //Input from doctor
        name:newInputValue
      });
      onChange({
        ...inputTest,
        id:0,
        name:newInputValue
      })
    }}
    style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Choice DC Test" placeholder="Medical Test" />
      )}
    />
  );
}
