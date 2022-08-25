import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Button, Grid, Stack, Typography } from "@mui/material";

export default function BasicDateTimePicker({
  text,
  onChange,
}: {
  text: string;
  onChange: (value: any) => void;
}) {
  const [value, setValue] = React.useState<Date | null>(new Date());
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    onChange(value);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label={text}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          {
            handleChange;
            console.log("sssee: ",value)
          }
        }}
      />
    </LocalizationProvider>
  );
}

