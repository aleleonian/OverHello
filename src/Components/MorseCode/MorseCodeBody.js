import * as React from 'react';
import { Body } from '../Body';
import { MorseCode } from './MorseCode';
import { MyAlert } from '../MyAlert';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function MorseCodeBodyContent({ data }) {
    const [showingBackDrop, setShowingBackdrop] = useState(true);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [videoErrorAlert, setVideoErrorAlert] = useState(false);
    const [videoErrorMessage, setVideoErrorMessage] = useState("");


    let vertical = 'top';
    let horizontal = 'right';

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };

    console.log("data received from Spreadsheet->", JSON.stringify(data));

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_SERVER + "/merge?name=" + data.name.toLowerCase(), {
            method: 'get',
            mode: 'cors',
        })
            .then(async (response) => {
                const videoCreationResponse = JSON.parse(await response.text());
                console.log("videoCreationResponse", videoCreationResponse);
                if (videoCreationResponse.success) {
                    setOpenSnackBar(true);
                }
                else {
                    setVideoErrorMessage("Video creation failed!->", videoCreationResponse)
                    setVideoErrorAlert(true);
                }
                setShowingBackdrop(false);
            })
            .catch((err) => {
                console.log("err!->", err);
                setVideoErrorMessage("Video creation problem :(")
                setVideoErrorAlert(true);
                setShowingBackdrop(false);
            });
    }, []);

    const navigate = useNavigate();

    function navigateToTweet() {
        navigate(`/x`, {
            state: {
                data: data,
            }
        });
    }
    const morseCodeAlphabet = {
        'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
        'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
        'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
        'y': '-.--', 'z': '--..',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.', '0': '-----',
        '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.',
        ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-',
        '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
    };
    let userName = data.name.toLowerCase().split("");
    let translatedName = "";
    userName.forEach(character => {
        translatedName += morseCodeAlphabet[character] + " ";
    });
    translatedName.trimEnd();

    return (
        <React.Fragment>
            <Typography variant="h3" gutterBottom>
                {translatedName}
            </Typography>
            <MorseCode videoUrl={`${process.env.REACT_APP_BACKEND_SERVER}/videos/${data.name.toLowerCase()}`}></MorseCode> <br />
            <br />
            <Button onClick={navigateToTweet} variant="contained">Continue to your tweet!</Button>
            {videoErrorAlert ? <MyAlert severity="error" message={videoErrorMessage} /> : ""}
            <Snackbar open={openSnackBar} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your video was created!
                </Alert>
            </Snackbar>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showingBackDrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </React.Fragment>
    );
}

export function MorseCodeBody({ data }) {
    return (
        <Body>
            <MorseCodeBodyContent data={data} />
        </Body>
    )
}