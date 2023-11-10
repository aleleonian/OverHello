import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Body } from '../Body';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ResultBodyContent({ data }) {

    const [videoCreated, setVideoCreated] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
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
        navigate(`/video`, {
            state: {
                data: data,
            }
        });
    }
    useEffect(() => {
        console.log(process.env.REACT_APP_BACKEND_SERVER + "/merge?name=" + data.name);
        fetch(process.env.REACT_APP_BACKEND_SERVER + "/merge?name=" + data.name.toLowerCase(), {
            method: 'get',
        })
            .then(async (response) => {
                const videoCreationResponse = await response.text();
                if (videoCreationResponse === "OK!") {
                    console.log("videoCreationResponse", videoCreationResponse);
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

    let nationality, eqNames, moreThanOneEquivalent;

    if (data.scrapedData && data.scrapedData.equivalent) {
        data.scrapedData.equivalent = data.scrapedData.equivalent.replace(/\s+/g, " ");
        nationality = data.scrapedData.equivalent.substring(0, data.scrapedData.equivalent.indexOf(" "));;
        eqNames = data.scrapedData.equivalent.substring(data.scrapedData.equivalent.lastIndexOf(" "), data.scrapedData.equivalent.length);
        if (eqNames.indexOf(",") > -1) {
            moreThanOneEquivalent = true;
        }
    }
    return (
        <div className="bodyComponent">
            <Box width="80%">

                {
                    data.scrapedData ?
                        <Typography variant="h4" gutterBottom color='primary'>
                            According to <a href={`https://www.behindthename.com/name/${data.name}`}>behindthename.com</a>:
                        </Typography>
                        : ""}
                <ul>
                    {
                        data.scrapedData && data.scrapedData.nameData ?
                            <Typography variant="h5" gutterBottom>
                                <li> {data.scrapedData.nameData} </li>
                            </Typography>
                            : ""}

                    {
                        data.scrapedData && data.scrapedData.equivalent ?
                            <><li>
                                <Typography variant="h5" gutterBottom>
                                    {`The ${nationality} equivalent${moreThanOneEquivalent ? "s" : ""} of your name ${moreThanOneEquivalent ? "are:" : "is:"}`}
                                </Typography>
                                <Typography variant="h5" color="primary" gutterBottom>
                                    {`${eqNames}`}
                                </Typography>
                            </li>
                            </>
                            : ""
                    }
                </ul>
            </Box>


            {videoCreated && <Button onClick={navigateToVideo} variant="contained">Watch Video</Button>}
            {/* {videoCreated && setOpenSnackBar(true)} */}

            <Snackbar open={openSnackBar} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your video was created!
                </Alert>
            </Snackbar>
            {/* {videoCreated && <MyAlert severity="success" message={"The video was created!"} />} */}
        </div>
    )

}
export function ResultBody({ data }) {
    return (
        <Body>
            <ResultBodyContent data={data} />
        </Body>
    )
}