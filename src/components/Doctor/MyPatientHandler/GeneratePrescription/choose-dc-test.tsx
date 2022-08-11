import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { API } from 'API Handler/api';
import { Test } from 'Classes/entity-class';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function ChooseDCTest({
  onChange,
}: {
  onChange: (value) => void;
}) {
  const [test, setTest] = React.useState<Test| null>();
  const [inputTest, setInputTest] = React.useState('');
  const [tests, setTests] = React.useState<Test[]>();
  onChange(test === null ? inputTest: test)
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
    getOptionLabel={(option)=>option.name as string}
    onChange={(event: any, newValue:Test| null) => {
      setTest(newValue);
      console.log(test)
    }}
    inputValue={inputTest}
    onInputChange={(event, newInputValue) => {
      setInputTest(newInputValue);
      console.log(inputTest)
    }}
    style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Choice DC Test" placeholder="Medical Test" />
      )}
    />
  );
}
