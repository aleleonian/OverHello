import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FormControl } from '@mui/material';
import { MyAlert } from './MyAlert';

export function Body() {

    const [emptyUsernameAlert, setAlert] = React.useState(false);

    function handleTextInputChange() {
        if (emptyUsernameAlert) {
            setAlert(false);
        }
    }
    function processInput() {
        const name = document.getElementById('userName').value;
        if (!name || name.length == 0) {
            setAlert(true)
        }
    }
    var height = 80;

    return (

        <div className="App-Body">
            <FormControl>
                <Box width={350}>
                    <TextField style={{ height }} onChange={handleTextInputChange} fullWidth rows={30} id="userName" size="big" label="Enter name" variant="outlined" />
                </Box>
                <Button variant="contained" onClick={processInput}>submit</Button>
                <br />
                {emptyUsernameAlert ? <MyAlert severity="error" message="You must input something 🥱" /> : ""}

            </FormControl>

        </div>
    )
}
