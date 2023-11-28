import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Body } from '../Body';
import { MyAlert } from '../MyAlert';

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
    const [videoErrorAlert, setVideoErrorAlert] = useState(false);
    const [spreadSheetErrorAlert, setSpreadSheetErrorAlert] = useState(false);
    const [videoErrorMessage, setVideoErrorMessage] = useState("");
    const [spreadSheetErrorMessage, setSpreadSheetErrorMessage] = useState("");

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
        let updatedData = { ...data };
        updatedData.tweet = userData.tweet;
        updatedData.tweetSnapshot = userData.tweetSnapshot;
        
        navigate(`/morse`, {
            state: {
                data: updatedData,
            }
        });
    }
    useEffect(() => {
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
                    setVideoErrorMessage("Video creation failed!->", videoCreationResponse)
                    setVideoErrorAlert(true);
                }
            })
            .catch((err) => {
                console.log("err!->", err);
                setVideoErrorMessage("Video creation problem :(")
                setVideoErrorAlert(true);
            });
    }, []);
    useEffect(() => { fetchUserData() }, []);

    async function fetchUserData() {

        let theData = {};
        theData.spreadSheetSnapshot = false;
        let counter = 0;

        while (!theData.spreadSheetSnapshot && counter < 5) {
            theData = await doFetch();
            await wait(2000);
            counter++;
        }
        console.log("fetchedData->", JSON.stringify(theData));
        setUserData(theData);

        setShowingBackdrop(false);

        if (theData.spreadSheetSnapshot) {
            const imgUrl = process.env.REACT_APP_BACKEND_SERVER + "/images/" + theData.spreadSheetSnapshot;
            document.getElementById('spreadSheetSnapshot').src = imgUrl;
        }
        else {
            setSpreadSheetErrorMessage("There was a problem generating your spreadsheet :(");
            setSpreadSheetErrorAlert(true);
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
            {spreadSheetErrorAlert ? <MyAlert severity="error" message={spreadSheetErrorMessage} /> : ""}
            {videoCreated && <Button onClick={navigateToVideo} variant="contained">Continue to Morse Code</Button>}
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