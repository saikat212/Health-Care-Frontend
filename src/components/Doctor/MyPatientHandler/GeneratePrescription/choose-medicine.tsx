import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Medicine } from 'Classes/entity-class';
import { API } from 'API Handler/api';

export default function ChooseMedicine({
  onChange,
}: {
  onChange: (value) => void;
}) {
 
  const [medicine, setMedicine] = React.useState<Medicine>();
  const [inputMed, setInputMed] = React.useState('');
  const [medicines, setMedicines] = React.useState<Medicine[]>();
  onChange(medicine === null ? inputMed:medicine)
   React.useEffect(
    ()=>{
        API.medicine.getAllMedicine().then(response=>{
            setMedicines(response.data)
            console.log(response.data)
        })
    },[]
  ) 

  return (
    <Autocomplete
      id="medicine"
      options={medicines as Medicine[]}
      getOptionLabel={(option)=>option.name as string}
      onChange={(event: any, newValue:Medicine| null) => {
        setMedicine(newValue as Medicine)
        console.log(medicine)
      }}
      inputValue={inputMed}
      onInputChange={(event, newInputValue) => {
        setInputMed(newInputValue);
      }}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Choice Medicine" placeholder="Medicine" />
      )}
    />
  );
}

