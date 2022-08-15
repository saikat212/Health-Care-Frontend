import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Autocomplete, TextField } from "@mui/material";

export default function ChooseDuration({
  onChange,
}: {
  onChange: (value) => void;
}) {
    const [value, setValue] = React.useState<string | null>();

  return (
    <Autocomplete
      id="duration"
      options={duration}
      onChange={(event: any, newValue: string | null) => {
        onChange(newValue)
        setValue(newValue)
      }}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Choose Duration" placeholder="Duration" />
      )}
    />
  );
}

const duration = [
  "1 day",
  "3 days",
  "7 days",
  "10 days",
  "15 days",
  "20 days",
  "1 month",
  "2 month",
  "3 month",
  "continuing..."
];
