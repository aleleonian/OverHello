import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export function Body() {
    function processInput() {
        const name = document.getElementById('userName').value;
        console.log(name);
    }
    return (
        <div className="App-Body">
            <Box component="form">
                <TextField id="outlined-basic" label="Enter name" variant="outlined" />
                <br />
                <Button variant="contained" onClick={processInput} endIcon={<SendIcon />}>submit</Button>
            </Box>
        </div>
    )
}
