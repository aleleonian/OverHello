import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Body } from '../Body';
import { MyAlert } from '../MyAlert';

import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



function SpreadsheetBodyContent({ data }) {

    const [showingBackDrop, setShowingBackdrop] = useState(true);
    const [userData, setUserData] = useState({ spreadSheetSnapshot: false });
    const [spreadSheetErrorAlert, setSpreadSheetErrorAlert] = useState(false);
    const [spreadSheetErrorMessage, setSpreadSheetErrorMessage] = useState("");


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

    useEffect(() => { fetchUserData() }, []);

    async function fetchUserData() {

        let theData = {};
        theData.spreadSheetSnapshot = false;
        let counter = 0;

        while (!theData.spreadSheetSnapshot && counter < 5) {
            theData = await doFetch();
            await wait(5000);
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
            <Button onClick={navigateToVideo} variant="contained">Continue to Morse Code</Button>

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