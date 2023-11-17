import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Body } from '../Body';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SpreadsheetBodyContent({ data }) {

    const [videoCreated, setVideoCreated] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [showingBackDrop, setShowingBackdrop] = useState(true);
    const [userData, setUserData] = useState({ spreadSheetSnapshot: false });

    let vertical = 'top';
    let horizontal = 'right';

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };

    const navigate = useNavigate();

    function navigateToVideo() {
        navigate(`/morse`, {
            state: {
                data: data,
            }
        });
    }
    useEffect(() => {
        console.log(process.env.REACT_APP_BACKEND_SERVER + "/merge?name=" + data.name);
        fetch(process.env.REACT_APP_BACKEND_SERVER + "/merge?name=" + data.name.toLowerCase(), {
            method: 'get',
            mode: 'cors',
        })
            .then(async (response) => {
                const videoCreationResponse = JSON.parse(await response.text());
                console.log("videoCreationResponse", videoCreationResponse);
                if (videoCreationResponse.success) {
                    setVideoCreated(true);
                    setOpenSnackBar(true);
                }
                else {
                    console.log("something wrong with videoCreationResponse", videoCreationResponse);
                }
            })
            .catch((err) => {
                console.log("err!->", err);
            });
    }, []);
    useEffect(() => { fetchUserData() }, []);

    async function fetchUserData() {

        let theData = {};
        theData.spreadSheetSnapshot = false;

        while (!theData.spreadSheetSnapshot) {
            theData = await doFetch();
            await wait(2000);
        }

        setUserData(theData);

        if (theData.spreadSheetSnapshot) {
            const imgUrl = process.env.REACT_APP_BACKEND_SERVER + "/images/" + theData.userId + "-snapshot.jpg"
            document.getElementById('spreadSheetSnapshot').src = imgUrl;
            setShowingBackdrop(false);
        }

        function doFetch() {
            return fetch(process.env.REACT_APP_BACKEND_SERVER + "/users/get?userId=" + data.userId, {
                method: 'get',
                mode: 'cors'
            })
                .then(async (response) => {
                    const userData = JSON.parse(await response.text());
                    return userData;

                })
                .catch((err) => {
                    console.log("err!->", err);
                });
        }

        function wait(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }
    }

    return (
        <div className="bodyComponent">
            <a href={userData.spreadSheetUrl} target="_blank">
                <img id="spreadSheetSnapshot" />
            </a>
            <br />
            {videoCreated && <Button onClick={navigateToVideo} variant="contained">Continue to Morse Code</Button>}


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
        </div>
    )

}
export function SpreadsheetBody({ data }) {
    return (
        <Body>
            <SpreadsheetBodyContent data={data} />
        </Body>
    )
}