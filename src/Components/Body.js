import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FormControl, FormLabel } from '@mui/material';

export function Body() {
    function processInput() {
        const name = document.getElementById('userName').value;
    }
    var height = 80;

    return (

        <div className="App-Body">
            <FormControl>
                <Box width={350}>
                    <TextField style={{ height }} fullWidth rows={30} id="outlined-basic" size="big" label="Enter name" variant="outlined" />
                </Box>
                <Button variant="contained" onClick={processInput}>submit</Button>
            </FormControl>

        </div>
    )
}
