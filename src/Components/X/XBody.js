import * as React from 'react';
import { useEffect, useState } from 'react';
import { MyAlert } from '../MyAlert';

import { Body } from '../Body';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function XBodyContent({ data }) {

    const [showingBackDrop, setShowingBackdrop] = useState(true);
    const [spreadSheetErrorAlert, setTweetAlert] = useState(false);
    const [spreadSheetErrorMessage, setTweetErrorMessage] = useState("");

    console.log("/x data received from the previous page->" + JSON.stringify(data));

    useEffect(() => { fetchUserData() }, []);

    async function fetchUserData() {
        let theData = {};

        if (!data.tweet || !data.tweetSnapshot) {
            let counter = 0;
            theData.tweet = false;
            theData.tweetSnapshot = false;

            while (!theData.tweet && !theData.tweetSnapshot && counter < 5) {
                theData = await doFetch();
                await wait(5000);
                counter++;
            }
        }
        else {
            theData = { ...data };
        }

        setShowingBackdrop(false);

        if (theData.tweetSnapshot) {
            const imgUrl = process.env.REACT_APP_BACKEND_SERVER + "/images/" + theData.tweetSnapshot;
            document.getElementById('tweetSnapshot').src = imgUrl;
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
        <div className="bodyComponent">
            <Box width="80%">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        </Typography>
                        <a id="tweetUrl" target="_blank">
                            <img id="tweetSnapshot" />
                        </a>
                    </CardContent>
                </Card>
            </Box>
            {spreadSheetErrorAlert ? <MyAlert severity="error" message={spreadSheetErrorMessage} /> : ""}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showingBackDrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
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