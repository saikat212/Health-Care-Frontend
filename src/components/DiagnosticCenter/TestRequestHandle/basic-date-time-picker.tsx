import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Button, Grid, Stack, Typography } from '@mui/material';

export default function BasicDateTimePicker() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (

    <>
      <Grid item>
       
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ backgroundColor: "white", padding: "100px", height: "100%" }}
          spacing={2}
        >
          <Grid item>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Sample Collection Time"
                value={value}

                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Grid>

    </>

  );
}
