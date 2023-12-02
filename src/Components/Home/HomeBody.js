import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Body } from '../Body';
import { MyAlert } from '../MyAlert';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Fragment } from 'react';

function HomeBodyContent() {

    const [errorAlert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [showingBackDrop, setShowBackdrop] = useState(false);

    const navigate = useNavigate();

    // let's "hook" the "enter" key
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.keyCode === 13) {
                processInput();
            }
        }
        document.addEventListener('keydown', handleKeyDown);

        // Don't forget to clean up
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    function handleTextInputChange() {
        if (errorAlert) {
            setAlert(false);
        }
    }
    function processInput() {
        setShowBackdrop(true);
        const name = document.getElementById('userName').value;
        if (!name || name.length === 0) {
            setAlertMessage("You must input something!");
            setShowBackdrop(false);
            setAlert(true);

        }
        else {
            let validNameRegex = /^[a-zA-Zéíóú\s]+$/;
            if (!validNameRegex.test(name)) {
                setAlertMessage("Names cannot contain certain characters.");
                setAlert(true)
                setShowBackdrop(false);
                return;
            }

            var jsonData = {
                "name": name
            }
            fetch(process.env.REACT_APP_BACKEND_SERVER, {
                method: 'post',
                mode: 'cors',
                body: JSON.stringify(jsonData), // body data type must match "Content-Type" header
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.text())
                .then(async (data) => {
                    console.log("data->" + data)
                    data = JSON.parse(data);
                    navigate(`/result`, {
                        state: {
                            data: data,
                        }
                    });
                })
                .catch((err) => {
                    setAlertMessage(err.message);
                    setAlert(true);
                    setShowBackdrop(false);
                });
        }
    }
    var height = 80;

    return (

        <Fragment>
            <FormControl>
                <Box className="homeForm">
                    <TextField style={{ height }} onChange={handleTextInputChange} fullWidth rows={30} id="userName" size="big" label="Enter your first name" variant="outlined" />
                </Box>
                <Button variant="contained" onClick={processInput}>submit</Button>
                <br />
                {errorAlert ? <MyAlert severity="error" message={alertMessage} /> : ""}

            </FormControl>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showingBackDrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

        </Fragment>
    )

}
export function HomeBody() {
    return (
        <Body>
            <HomeBodyContent />
        </Body>
    )
}