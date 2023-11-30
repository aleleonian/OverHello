import * as React from 'react';
import { useEffect, useState } from 'react';
import { MyAlert } from '../MyAlert';

import { Body } from '../Body';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function XBodyContent({ data }) {

    const [showingBackDrop, setShowingBackdrop] = useState(true);
    const [tweetErrorAlert, setTweetAlert] = useState(false);
    const [tweetErrorMessage, setTweetErrorMessage] = useState("");
    const [openSnackBar, setOpenSnackBar] = useState(false);

    let vertical = 'top';
    let horizontal = 'right';

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };


    console.log("/x data received from the previous page->" + JSON.stringify(data));

    useEffect(() => { fetchUserData() }, []);

    async function fetchUserData() {
        let theData = {};

        if (!data.tweet || !data.tweetQrFile) {
            let counter = 0;
            theData.tweet = false;
            theData.tweetQrFile = false;

            while (!theData.tweet && !theData.tweetQrFile && counter < 5) {
                theData = await doFetch();
                await wait(5000);
                counter++;
            }
        }
        else {
            theData = { ...data };
        }

        setShowingBackdrop(false);
        setOpenSnackBar(true);

        if (theData.tweetQrFile) {
            const imgUrl = process.env.REACT_APP_BACKEND_SERVER + "/images/" + theData.tweetQrFile;
            document.getElementById('tweetQrFile').src = imgUrl;
            document.getElementById('tweetUrl').href = theData.tweet;
        }
        else {
            setTweetErrorMessage("There was a problem generating your tweet :(");
            setTweetAlert(true);
        }

        setShowingBackdrop(false);

        function doFetch() {
            console.log("dofetch");

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
        <div>
            <a id="tweetUrl" target="_blank">
                <img id="tweetQrFile" width="400"/>
            </a>
            {tweetErrorAlert ? <MyAlert severity="error" message={tweetErrorMessage} /> : ""}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showingBackDrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={openSnackBar} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="primary" sx={{ width: '100%' }}>
                    Scan or click on the QR code!
                </Alert>
            </Snackbar>
        </div>
    )

}
export function XBody({ data }) {
    return (
        <Body>
            <XBodyContent data={data} />
        </Body>
    )
}